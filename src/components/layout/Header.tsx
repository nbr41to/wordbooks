import React from 'react';
import { Box } from '@fower/react';

type HeaderProps = {

};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Box bgOrange600 white text2XL toCenterX py-12 >
      Wordbook
    </Box >
  );
};