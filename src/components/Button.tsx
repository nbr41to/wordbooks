import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  className?: string
  onClick: () => void
  label: string
  disabled?: boolean
  baseColor: string
  pressColor: string
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  label,
  onClick,
  disabled = false,
  baseColor = '#333',
  pressColor = 'lime',
}) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      baseColor={baseColor}
      pressColor={pressColor}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button < { baseColor: string, pressColor: string, } > `
  display: block;
  color: ${({ baseColor }) => baseColor};
  text-align: center;
  padding: 12px 32px;
  border: 3px solid ${({ baseColor }) => baseColor};
  border-radius: 66px;
  box-shadow: 0px 4px 0px ${({ baseColor }) => baseColor};
  position: relative;

  &:active {
    position: relative;
    top: 2px;
    box-shadow: 0px 2px 0px ${({ baseColor }) => baseColor};
    background-color: ${({ pressColor }) => pressColor};
  }
  &:disabled {
    opacity: 0.4;
  }
`;
