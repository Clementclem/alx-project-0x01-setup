import React from 'react';

const Button: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

