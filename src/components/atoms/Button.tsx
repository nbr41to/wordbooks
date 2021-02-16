import { ButtonBase, ButtonBaseProps } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export type ButtonProps = ButtonBaseProps & {
  className?: string
  baseColor?: string
  pressColor?: string
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  baseColor = '#3503fc',
  children,
  ...props
}) => {
  console.log(props)
  return (
    <StyledButton
      className={className}
      baseColor={baseColor}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(ButtonBase) < { baseColor: string } > `
  /* display: block; */
  color: ${({ baseColor }) => baseColor};
  text-align: center;
  padding: 12px 32px;
  border: 1px solid ${({ baseColor }) => baseColor};
  border-radius: 4px;

  &:active {

  }
  &:disabled {
    opacity: 0.4;
  }
`;
