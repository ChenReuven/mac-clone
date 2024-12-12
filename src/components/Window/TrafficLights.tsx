import React from 'react';

interface TrafficLightsProps {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

const TrafficLights: React.FC<TrafficLightsProps> = ({
  onClose,
  onMinimize,
  onMaximize
}) => {
  return (
    <div className="flex gap-2 px-3 py-2">
      <button
        onClick={onClose}
        className="traffic-lights bg-[#ff5f57] hover:bg-[#ff5f57]/80"
      />
      <button
        onClick={onMinimize}
        className="traffic-lights bg-[#febc2e] hover:bg-[#febc2e]/80"
      />
      <button
        onClick={onMaximize}
        className="traffic-lights bg-[#28c840] hover:bg-[#28c840]/80"
      />
    </div>
  );
};

export default TrafficLights;