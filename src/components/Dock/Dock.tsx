import React from 'react';
import DockItem from './DockItem';
import { dockIcons } from '../../config/dockIcons';

const Dock: React.FC = () => {
  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl">
      <div className="flex items-end gap-4 h-16">
        {dockIcons.map((item, index) => (
          <DockItem
            key={index}
            icon={item.icon}
            label={item.label}
            isRunning={item.isRunning}
          />
        ))}
      </div>
    </div>
  );
};

export default Dock;