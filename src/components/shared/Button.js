import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      className="text-white bg-black border border-black rounded-full p-2 hover:border-0.5"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
