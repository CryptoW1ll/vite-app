import React from 'react';

function Button({ onClick, label, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
