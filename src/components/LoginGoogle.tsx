import React from 'react';
import { Button } from '@material-ui/core';
import { Box } from '@fower/react';
import { signinGoogle } from 'src/firebase/auth';


type LoginGoogleProps = {

};

export const LoginGoogle: React.FC<LoginGoogleProps> = () => {
  return (
    <Box toCenter column border-2 rounded-8 px12 py6 m6>
      <Box textXL toCenter my2>Googleアカウントで</Box>
      <Button variant='outlined' fullWidth onClick={signinGoogle}>Login</Button>
    </Box>
  );
};