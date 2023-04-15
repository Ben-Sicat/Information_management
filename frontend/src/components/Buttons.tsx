import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  label: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick = () => {},
  ...buttonProps
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Button variant="contained" onClick={handleClick} {...buttonProps}   sx={{ cursor: 'pointer', ':hover': { cursor: 'pointer' } }}>
      {label}
    </Button>
  );
};

export default CustomButton;
