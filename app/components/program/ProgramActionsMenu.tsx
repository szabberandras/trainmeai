'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, Play, Pause, CheckCircle, Archive, RotateCcw, Trash2, Settings, TrendingUp } from 'lucide-react';
import { Program } from '../../../types';
import { ProgramLifecycleService, GoalCompletionCheck } from '../../../lib/services/program-lifecycle.service';

interface ProgramActionsMenuProps {
  program: Program;
  userId: string;
  onProgramUpdated: () => void;
  onProgramCompleted?: (program: Program) => void;
  onProgramArchived?: (program: Program) => void;
  onProgramRestarted?: (newProgramId: string) => void;
}

interface ActionItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  description?: string;
}

export default function ProgramActionsMenu({
  program,
  userId,
  onProgramUpdated,
  onProgramCompleted,
  onProgramArchived,
  onProgramRestarted
}: ProgramActionsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [goalCheck, setGoalCheck] = useState<GoalCompletionCheck | null>(null);
  const [showGoalDialog, setShowGoalDialog] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check goal completion when menu opens
  useEffect(() => {
    if (isOpen && program.status === 'active') {
      checkGoalCompletion();
    }
  }, [isOpen, program.id]);

  const checkGoalCompletion = async () => {
    try {
      const check = await ProgramLifecycleService.checkGoalCompletion(program.id, userId);
      setGoalCheck(check);
    } catch (error) {
      console.error('Error checking goal completion:', error);
    }
  };

  const handleCompleteProgram = async (reason: 'goal_achieved' | 'manual' = 'manual') => {
    setIsLoading(true);
    try {
      await ProgramLifecycleService.completeProgram(program.id, userId, reason);
      onProgramCompleted?.(program);
      onProgramUpdated();
      setIsOpen(false);
    } catch (error) {
      console.error('Error completing program:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleArchiveProgram = async () => {
    setIsLoading(true);
    try {
      await ProgramLifecycleService.archiveProgram(program.id, userId, 'Manual archive');
      onProgramArchived?.(program);
      onProgramUpdated();
      setIsOpen(false);
    } catch (error) {
      console.error('Error archiving program:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePauseProgram = async () => {
    setIsLoading(true);
    try {
      await ProgramLifecycleService.pauseProgram(program.id, userId, 'Manual pause');
      onProgramUpdated();
      setIsOpen(false);
    } catch (error) {
      console.error('Error pausing program:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResumeProgram = async () => {
    setIsLoading(true);
    try {
      await ProgramLifecycleService.resumeProgram(program.id, userId);
      onProgramUpdated();
      setIsOpen(false);
    } catch (error) {
      console.error('Error resuming program:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestartProgram = async () => {
    setIsLoading(true);
    try {
      const newProgramId = await ProgramLifecycleService.restartProgram(program.id, userId);
      onProgramRestarted?.(newProgramId);
      onProgramUpdated();
      setIsOpen(false);
    } catch (error) {
      console.error('Error restarting program:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getActionItems = (): ActionItem[] => {
    const items: ActionItem[] = [];

    // AI Goal Check Action (always available for active programs)
    if (program.status === 'active') {
      items.push({
        id: 'goal-check',
        label: 'AI Goal Check',
        icon: <TrendingUp size={16} />,
        action: () => setShowGoalDialog(true),
        description: 'Check if your goals are achieved'
      });
    }

    // Status-specific actions
    switch (program.status) {
      case 'active':
        items.push(
          {
            id: 'complete',
            label: 'Mark Complete',
            icon: <CheckCircle size={16} />,
            action: () => handleCompleteProgram('manual'),
            variant: 'success',
            description: 'Mark this program as completed'
          },
          {
            id: 'pause',
            label: 'Pause Program',
            icon: <Pause size={16} />,
            action: handlePauseProgram,
            variant: 'warning',
            description: 'Temporarily pause this program'
          }
        );
        break;

      case 'paused':
        items.push(
          {
            id: 'resume',
            label: 'Resume Program',
            icon: <Play size={16} />,
            action: handleResumeProgram,
            variant: 'success',
            description: 'Resume this paused program'
          },
          {
            id: 'complete',
            label: 'Mark Complete',
            icon: <CheckCircle size={16} />,
            action: () => handleCompleteProgram('manual'),
            variant: 'success',
            description: 'Mark this program as completed'
          }
        );
        break;

      case 'completed':
        items.push({
          id: 'restart',
          label: 'Restart Program',
          icon: <RotateCcw size={16} />,
          action: handleRestartProgram,
          description: 'Start this program again from the beginning'
        });
        break;
    }

    // Archive action (available for all statuses except archived)
    if (program.status !== 'archived') {
      items.push({
        id: 'archive',
        label: 'Archive Program',
        icon: <Archive size={16} />,
        action: handleArchiveProgram,
        variant: 'danger',
        description: 'Move to archived programs'
      });
    }

    return items;
  };

  const getVariantStyles = (variant?: string) => {
    switch (variant) {
      case 'success':
        return 'text-green-700 hover:bg-green-50';
      case 'warning':
        return 'text-yellow-700 hover:bg-yellow-50';
      case 'danger':
        return 'text-red-700 hover:bg-red-50';
      default:
        return 'text-gray-700 hover:bg-gray-50';
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Menu Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        disabled={isLoading}
      >
        <MoreVertical size={20} />
      </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            {getActionItems().map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                disabled={item.disabled || isLoading}
                className={`w-full px-4 py-3 text-left flex items-start gap-3 transition-colors ${getVariantStyles(item.variant)} ${
                  item.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-50'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      {item.description}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* AI Goal Check Dialog */}
      {showGoalDialog && goalCheck && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-blue-600" size={24} />
              <h3 className="text-lg font-semibold">AI Goal Assessment</h3>
            </div>

            <div className="space-y-4">
              {/* Goal Status */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Goal Achievement</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  goalCheck.goalAchieved 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {goalCheck.goalAchieved ? 'Achieved!' : 'In Progress'}
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {goalCheck.completionRate}%
                  </div>
                  <div className="text-xs text-blue-700">Completion</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {goalCheck.keyMetrics.consistency}%
                  </div>
                  <div className="text-xs text-green-700">Consistency</div>
                </div>
              </div>

              {/* AI Recommendation */}
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-sm mb-2">AI Recommendation</div>
                <div className="text-sm text-gray-700 mb-3">
                  {goalCheck.aiRecommendation.reason}
                </div>
                <div className="space-y-1">
                  {goalCheck.aiRecommendation.nextSteps.map((step, index) => (
                    <div key={index} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              {goalCheck.goalAchieved && (
                <button
                  onClick={() => {
                    setShowGoalDialog(false);
                    handleCompleteProgram('goal_achieved');
                  }}
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Complete Program
                </button>
              )}
              <button
                onClick={() => setShowGoalDialog(false)}
                className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Continue Training
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 