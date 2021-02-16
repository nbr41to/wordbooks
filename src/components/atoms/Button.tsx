import { ButtonBase, ButtonBaseProps } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export type ButtonProps = ButtonBaseProps & {
  className?: string
  bgColor?: string
  pressColor?: string
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  bgColor = '#3503fc',
  children,
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      bgColor={bgColor}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(({ bgColor, ...props }) => <ButtonBase {...props} />) < { bgColor: string } > `
  /* display: block; */
  color: ${({ bgColor }) => bgColor};
  text-align: center;
  padding: 12px 32px;
  border: 1px solid ${({ bgColor }) => bgColor};
  border-radius: 4px;

  &:active {

  }
  &:disabled {
    opacity: 0.4;
  }
`;
