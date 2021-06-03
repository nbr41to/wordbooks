import { Button } from '@material-ui/core';
import React from 'react';
import { Box } from '@fower/react';
import { LoginEmail } from './LoginEmail';
import { LoginGoogle } from './LoginGoogle';
import { SignUpEmail } from './SignupEmail';
type TopProps = {

};

export const Top: React.FC<TopProps> = () => {
  return (
    <Box toCenter column>
      <LoginGoogle />
      <LoginEmail />
      <SignUpEmail />
    </Box>
  );
};