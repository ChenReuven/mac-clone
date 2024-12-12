import React from 'react';
import { AppleIcon, Wifi, Battery, Clock } from 'lucide-react';
import { format } from 'date-fns';

const MenuBar: React.FC = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 w-full h-[var(--menu-bar-height)] bg-black/20 backdrop-blur-md px-2 flex items-center text-sm text-white/90">
      <div className="flex items-center gap-4">
        <AppleIcon size={16} />
        <span className="font-semibold">Finder</span>
        <div className="flex gap-3">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Window</span>
          <span>Help</span>
        </div>
      </div>
      
      <div className="ml-auto flex items-center gap-3">
        <Wifi size={16} />
        <Battery size={16} />
        <span>{format(time, 'EEE MMM d h:mm aa')}</span>
      </div>
    </div>
  );
};

export default MenuBar;