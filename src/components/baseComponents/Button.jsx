import React from 'react';

const Button = ({ onClick, children, type = 'button', className = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
