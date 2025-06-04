interface PasswordStrengthMeterProps {
  password: string;
}

const calculatePasswordStrength = (password: string): number => {
  let score = 0;

  // Length check
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;

  // Character variety checks
  if (/[A-Z]/.test(password)) score += 1; // Uppercase
  if (/[a-z]/.test(password)) score += 1; // Lowercase
  if (/[0-9]/.test(password)) score += 1; // Numbers
  if (/[^A-Za-z0-9]/.test(password)) score += 1; // Special characters

  // Normalize score to 0-4 range
  return Math.min(4, Math.floor(score / 1.5));
};

const getStrengthLabel = (strength: number): string => {
  switch (strength) {
    case 0:
      return 'Very Weak';
    case 1:
      return 'Weak';
    case 2:
      return 'Fair';
    case 3:
      return 'Good';
    case 4:
      return 'Strong';
    default:
      return '';
  }
};

const getStrengthColor = (strength: number): string => {
  switch (strength) {
    case 0:
      return 'bg-red-500';
    case 1:
      return 'bg-orange-500';
    case 2:
      return 'bg-yellow-500';
    case 3:
      return 'bg-blue-500';
    case 4:
      return 'bg-green-500';
    default:
      return 'bg-gray-200';
  }
};

export default function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
  const strength = calculatePasswordStrength(password);
  const strengthLabel = getStrengthLabel(strength);
  const strengthColor = getStrengthColor(strength);
  const segments = [0, 1, 2, 3];

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {segments.map((segment) => (
          <div
            key={segment}
            className={`h-1 flex-1 rounded-full transition-colors ${
              segment <= strength ? strengthColor : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      {password && (
        <p className={`text-xs font-medium ${
          strength >= 3 ? 'text-green-600' : 'text-gray-500'
        }`}>
          Password Strength: {strengthLabel}
        </p>
      )}
    </div>
  );
} 