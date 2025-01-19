import React from 'react';
import { motion } from 'framer-motion';

interface DockItemProps {
  icon: string;
  label: string;
  isRunning?: boolean;
}

const DockItem: React.FC<DockItemProps> = ({ icon, label, isRunning }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.5, y: -10 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5
      }}
    >
      <div className="relative w-12 h-12">
        <img
          src={icon}
          alt={label}
          className="w-full h-full object-contain drop-shadow-lg"
          draggable={false}
          loading="eager"
        />
        {isRunning && (
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
        )}
      </div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl whitespace-nowrap">
        {label}
      </div>
    </motion.div>
  );
};

export default DockItem;