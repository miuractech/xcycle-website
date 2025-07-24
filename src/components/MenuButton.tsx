import { forwardRef } from 'react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ isOpen, onClick }, ref) => {
    const buttonClasses = `
      w-10 h-10 relative grid place-content-center rounded-full 
      transition-all duration-300 text-gray-200 hover:text-gray-700
      ${isOpen ? 'bg-blue-50 text-blue-500' : ''}
    `;

    return (
      <button 
        ref={ref}
        className={buttonClasses}
        data-hover=""
        onClick={onClick}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="transition-colors"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <div data-hover-bounds="" />
      </button>
    );
  }
); 