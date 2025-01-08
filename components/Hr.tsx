import React from 'react';

interface HrProps {
  className?: string;
}

const Hr: React.FC<HrProps> = ({ className }) => {
  return (
    <hr 
      className={`bg-black border-t-2 border-slate-800 px-4 mx-auto max-w-screen-xl ${className}`} 
    />
  );
};

export default Hr;