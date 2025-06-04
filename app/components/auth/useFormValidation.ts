import { useState } from 'react';
import { checkEmailExists, validateEmail } from './authUtils';

interface ValidationErrors {
  [key: string]: string;
}

interface FormValidationProps {
  isRegistering: boolean;
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

export const useFormValidation = () => {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  const validateForm = async ({
    isRegistering,
    email,
    password,
    confirmPassword,
    fullName,
  }: FormValidationProps): Promise<boolean> => {
    const errors: ValidationErrors = {};

    if (isRegistering) {
      if (!fullName.trim()) {
        errors.fullName = 'Full name is required';
      }

      if (!email) {
        errors.email = 'Email is required';
      } else if (!validateEmail(email)) {
        errors.email = 'Please enter a valid email address';
      } else {
        setIsCheckingEmail(true);
        const emailExists = await checkEmailExists(email);
        setIsCheckingEmail(false);
        
        if (emailExists) {
          errors.email =
            'This email is already registered. Please use a different email or try logging in.';
        }
      }
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (isRegistering && !confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (isRegistering && password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return {
    validationErrors,
    isCheckingEmail,
    validateForm,
  };
}; 