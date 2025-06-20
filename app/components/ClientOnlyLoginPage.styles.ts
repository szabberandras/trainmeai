export const styles = {
  pageContainer: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: 'transparent',
    color: '#222222',
    fontFamily: 'var(--font-inter), sans-serif',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    gap: '0',
    height: '100vh',
  },
  loginContent: {
    width: '50vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem 3rem',
    backgroundColor: 'white',
    borderRadius: '0',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    zIndex: 2,
    flexShrink: 0,
    flexGrow: 0,
    overflowY: 'auto' as const,
  },
  logoImage: {
    width: '48px',
    marginBottom: '1rem',
  },
  formHeader: {
    fontFamily: 'var(--font-sora), sans-serif',
    fontWeight: '600',
    fontSize: '1.75rem',
    marginBottom: '1rem',
    color: '#222222',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
    width: '100%',
    maxWidth: '320px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #eee',
    backgroundColor: '#fefefe',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-inter), sans-serif',
    color: '#222222',
    width: '100%',
    transition: 'border-color 0.3s ease',
    outline: 'none',
  },
  inputError: {
    border: '1px solid #FF4C4C',
    backgroundColor: '#fef5f5',
  },
  errorText: {
    color: '#FF4C4C',
    fontSize: '0.75rem',
    marginTop: '0.25rem',
  },
  checkingText: {
    color: '#0047FF',
    fontSize: '0.75rem',
    marginTop: '0.25rem',
  },
  buttonPrimary: {
    backgroundColor: '#0047FF',
    color: 'white',
    padding: '0.75rem 1rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginTop: '0.5rem',
    width: '100%',
    transition: 'background-color 0.3s ease',
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid transparent',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  orSeparator: {
    textAlign: 'center' as const,
    margin: '1rem 0',
    color: '#999',
    width: '100%',
    position: 'relative' as const,
    fontSize: '0.85rem',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  socialButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  socialButtonFacebook: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    backgroundColor: '#1877F2',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  socialButtonDisabled: {
    opacity: '0.6',
    cursor: 'not-allowed',
  },
  socialIcon: {
    width: '24px',
    height: '24px',
  },
  error: {
    color: '#FF4C4C',
    marginTop: '0.75rem',
    textAlign: 'center' as const,
    width: '100%',
    fontSize: '0.85rem',
    padding: '0.5rem',
    backgroundColor: '#fef5f5',
    borderRadius: '4px',
    border: '1px solid #fecaca',
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    color: '#0047FF',
    cursor: 'pointer',
    padding: 0,
    fontFamily: 'var(--font-inter), sans-serif',
    textDecoration: 'underline',
    fontSize: '0.85rem',
    marginTop: '0.5rem',
  },
  termsText: {
    fontSize: '0.7rem',
    color: '#666',
    textAlign: 'center' as const,
    marginTop: '0.75rem',
    lineHeight: '1.3',
  },
  link: {
    color: '#0047FF',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  designShowcase: {
    width: '50vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
    padding: '2rem',
    overflow: 'hidden',
  },
  imageFrame: {
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative' as const,
    width: '100%',
    height: 'auto',
    maxWidth: '550px',
    maxHeight: '80vh',
    boxShadow: '0 15px 30px rgba(0, 71, 255, 0.2)',
    display: 'flex',
  },
  showcaseImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const,
    color: 'white',
    padding: '1rem',
    fontFamily: 'var(--font-inter), sans-serif',
  },
  overlayTitle: {
    fontFamily: 'var(--font-sora), sans-serif',
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    fontWeight: '800',
  },
  overlayText: {
    fontSize: '1.1rem',
    lineHeight: '1.5',
    maxWidth: '80%',
  },
  userIconsContainer: {
    position: 'absolute' as const,
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '-10px',
    zIndex: 3,
  },
  userIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '3px solid white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    position: 'absolute' as const,
  },
} as const; 