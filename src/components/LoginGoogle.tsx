import React from 'react';
import { Button } from '@material-ui/core';
import { Box } from '@fower/react';


type LoginGoogleProps = {

};

export const LoginGoogle: React.FC<LoginGoogleProps> = () => {
  return (
    <Box border-2 p6 m6>
      <Button>Googleアカウントでログイン</Button>
    </Box>
  );
};