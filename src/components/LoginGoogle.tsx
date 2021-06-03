import React from 'react';
import { Button } from '@material-ui/core';
import { Box } from '@fower/react';
import { signinGoogle } from 'src/firebase/auth';


type LoginGoogleProps = {

};

export const LoginGoogle: React.FC<LoginGoogleProps> = () => {
  return (
    <Box border-2 p6 m6>
      <Button variant='outlined' onClick={signinGoogle}>Googleアカウントでログイン</Button>
    </Box>
  );
};