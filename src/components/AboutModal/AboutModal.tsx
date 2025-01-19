import { X } from 'lucide-react';
import React, { useEffect } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLearnMore = () => {
    window.open('https://learn.aiwithchen.co.il/ai-for-eveyone', '_blank');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-xl w-[500px] overflow-hidden shadow-2xl relative">
        {/* Close button overlay */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full transition-colors group"
          aria-label="Close modal"
        >
          <X 
            size={20} 
            className="text-gray-500 group-hover:text-gray-700 transition-colors" 
          />
        </button>
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">About This Mac</h2>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col items-center gap-4">
          {/* Course Logo */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-12 h-12"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">AI With Chen</h3>
            <p dir="rtl" className="text-gray-600 mb-4">AI לכולם - הספרייה הפתוחה</p>
          </div>

          <button
            onClick={handleLearnMore}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
