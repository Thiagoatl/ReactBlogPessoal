import React, { FC, MouseEventHandler } from 'react';
import './FloatingButton.css';

interface FloatingButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const FloatingButton: FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      +
    </button>
  );
};

export default FloatingButton;
