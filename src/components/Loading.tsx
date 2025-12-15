import type { ReactNode } from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

interface LoadingWrapperProps {
  isLoading: boolean;
  children: ReactNode;
  loadingText?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  text = 'Loading...' 
}) => {
  return (
    <div className={`loading-spinner loading-${size}`}>
      <div className="spinner"></div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ 
  isLoading, 
  children, 
  loadingText = 'Loading your portfolio...' 
}) => {
  if (isLoading) {
    return (
      <div className="loading-overlay">
        <LoadingSpinner size="large" text={loadingText} />
      </div>
    );
  }

  return <>{children}</>;
};

export { LoadingSpinner, LoadingWrapper };