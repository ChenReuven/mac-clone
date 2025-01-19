import { format } from 'date-fns';
import { AppleIcon, Battery, Wifi } from 'lucide-react';
import React from 'react';
import AboutModal from '../AboutModal/AboutModal';

interface MenuItem {
  label: string;
  items: string[];
}

const menuItems: MenuItem[] = [
  {
    label: 'File',
    items: ['New Finder Window', 'New Folder', 'Open', 'Close Window', 'Get Info', 'Move to Trash']
  },
  {
    label: 'Edit',
    items: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste', 'Select All']
  },
  {
    label: 'View',
    items: ['as Icons', 'as List', 'as Columns', 'as Gallery', 'Show Preview', 'Show Path Bar']
  },
  {
    label: 'Go',
    items: ['Back', 'Forward', 'Enclosing Folder', 'Home', 'Documents', 'Desktop', 'Downloads']
  },
  {
    label: 'Window',
    items: ['Minimize', 'Zoom', 'Show Previous Tab', 'Show Next Tab', 'Bring All to Front']
  },
  {
    label: 'Help',
    items: ['Mac Help', 'See All Topics', 'What\'s New in Finder', 'Keyboard Shortcuts']
  }
];

const MenuBar: React.FC = () => {
  const [time, setTime] = React.useState(new Date());
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-[var(--menu-bar-height)] bg-black/20 backdrop-blur-md px-2 flex items-center text-sm text-white/90 z-50">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <AppleIcon size={16} className="cursor-pointer" />
            <div className="absolute hidden group-hover:block top-full left-0 bg-black/80 backdrop-blur-md rounded-b-lg py-1 min-w-[200px]">
              <div 
                className="px-4 py-1 hover:bg-white/20 cursor-pointer"
                onClick={() => setIsAboutModalOpen(true)}
              >
                About This Mac
              </div>
              <div className="px-4 py-1 hover:bg-white/20 cursor-pointer">System Settings...</div>
              <div className="border-t border-white/20 my-1"></div>
              <div className="px-4 py-1 hover:bg-white/20 cursor-pointer">Sleep</div>
              <div className="px-4 py-1 hover:bg-white/20 cursor-pointer">Restart...</div>
              <div className="px-4 py-1 hover:bg-white/20 cursor-pointer">Shut Down...</div>
            </div>
          </div>
          <span className="font-semibold">Finder</span>
          <div className="flex gap-3">
            {menuItems.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span className="cursor-default px-1 py-0.5 rounded hover:bg-white/10">
                  {menu.label}
                </span>
                {activeMenu === menu.label && (
                  <div className="absolute top-full left-0 bg-black/80 backdrop-blur-md rounded-b-lg py-1 min-w-[200px]">
                    {menu.items.map((item) => (
                      <div
                        key={item}
                        className="px-4 py-1 hover:bg-white/20 cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="ml-auto flex items-center gap-3">
          <Wifi size={16} />
          <Battery size={16} />
          <span>{format(time, 'EEE MMM d h:mm aa')}</span>
        </div>
      </div>

      <AboutModal 
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </>
  );
};

export default MenuBar;