import React from 'react';
import { Box } from '@fower/react';
import Router from 'next/router';

type HeaderProps = {

};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Box bgOrange600 white text2XL toCenterX py-12>
      <Box cursorPointer onClick={() => Router.push('/')}>
        Wordbook
      </Box>
    </Box >
  );
};