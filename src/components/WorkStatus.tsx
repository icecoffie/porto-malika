import { useState } from 'react';

type StatusType = 'available' | 'busy' | 'unavailable';

interface Status {
  type: StatusType;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  message: string;
  icon: string;
}

const statuses: Record<StatusType, Status> = {
  available: {
    type: 'available',
    label: 'Available for work',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
    message: 'Open to new projects and collaborations',
    icon: '✓'
  },
  busy: {
    type: 'busy',
    label: 'Partially available',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    borderColor: 'rgba(245, 158, 11, 0.3)',
    message: 'Working on projects, but open to interesting opportunities',
    icon: '⏱'
  },
  unavailable: {
    type: 'unavailable',
    label: 'Fully booked',
    color: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
    borderColor: 'rgba(239, 68, 68, 0.3)',
    message: 'Not taking new projects at the moment',
    icon: '✕'
  }
};

export default function WorkStatus() {
  // Change this to update your current status
  const [currentStatus] = useState<StatusType>('available');
  const [isOpen, setIsOpen] = useState(false);
  const status = statuses[currentStatus];

  return (
    <div className="relative inline-block">
      {/* Compact Badge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 cursor-pointer shadow-md"
        style={{ 
          backgroundColor: status.bgColor,
          borderColor: status.borderColor,
        }}
      >
        {/* Status Dot */}
        <div className="relative flex items-center justify-center">
          <div 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: status.color }}
          ></div>
        </div>
        
        <span 
          className="text-sm font-semibold"
          style={{ color: status.color }}
        >
          {status.label}
        </span>
        
        {/* Arrow */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: status.color }}
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"/>
        </svg>
      </button>

      {/* Popup */}
      {isOpen && (
        <div 
          className="absolute top-full mt-2 left-0 w-72 p-4 rounded-xl border-2 shadow-2xl z-50 animate-slideDown"
          style={{ 
            backgroundColor: status.bgColor,
            borderColor: status.borderColor,
            boxShadow: `0 10px 40px ${status.bgColor}`
          }}
        >
          {/* Icon */}
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
              style={{ 
                backgroundColor: status.color + '20',
                color: status.color
              }}
            >
              {status.icon}
            </div>
            
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/30">
              <div 
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: status.color }}
              ></div>
              <span className="text-xs text-white/70">LIVE</span>
            </div>
          </div>
          
          <p className="text-sm text-white/80 mb-3">
            {status.message}
          </p>
          
          <a 
            href="#contact"
            className="block w-full text-center px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
            style={{ 
              backgroundColor: status.color,
              color: 'white'
            }}
          >
            Get in touch →
          </a>
        </div>
      )}
    </div>
  );
}

