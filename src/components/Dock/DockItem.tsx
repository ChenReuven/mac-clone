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
      className="dock-item group"
      whileHover={{ scale: 1.5, y: -10 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5
      }}
    >
      <div className="relative w-full h-full">
        <img
          src={icon}
          alt={label}
          className="w-12 h-12 object-contain drop-shadow-lg"
          draggable={false}
          loading="eager"
        />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {isRunning && (
            <div className="w-1 h-1 rounded-full bg-white/80" />
          )}
        </div>
      </div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-xl whitespace-nowrap">
        {label}
      </div>
    </motion.div>
  );
};

export default DockItem;