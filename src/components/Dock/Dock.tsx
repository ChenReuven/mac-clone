import React from 'react';
import DockItem from './DockItem';
import { dockIcons } from '../../config/dockIcons';

const Dock: React.FC = () => {
  return (
    <div className="dock">
      <div className="flex items-end gap-2 h-full">
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