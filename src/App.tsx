import React from 'react';
import Dock from './components/Dock/Dock';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MenuBar from './components/MenuBar/MenuBar';
import Window from './components/Window/Window';
import './styles/globals.css';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [windows, setWindows] = React.useState([
    { id: 1, title: 'Finder', isOpen: true }
  ]);

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeWindow = (id: number) => {
    setWindows(windows.map(window => 
      window.id === id ? { ...window, isOpen: false } : window
    ));
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600">
      <MenuBar />
      
      {windows.map(window => window.isOpen && (
        <Window 
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
        >
          <div className="w-[600px] h-[400px]">
            <h2 className="text-gray-800">Welcome to AI With Chen "MacOS"</h2>
          </div>
        </Window>
      ))}

      <Dock />
    </div>
  );
}

export default App;