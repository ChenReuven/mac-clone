import React from 'react';
import { motion, useDragControls } from 'framer-motion';
import TrafficLights from './TrafficLights';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const Window: React.FC<WindowProps> = ({ title, children, onClose }) => {
  const controls = useDragControls();

  return (
    <motion.div
      className="window absolute"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      drag
      dragControls={controls}
      dragMomentum={false}
    >
      <div 
        className="window-titlebar flex items-center h-10 border-b border-white/10"
        onPointerDown={(e) => controls.start(e)}
      >
        <TrafficLights onClose={onClose} />
        <span className="text-sm text-center flex-1">{title}</span>
      </div>
      <div className="window-content p-4">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;