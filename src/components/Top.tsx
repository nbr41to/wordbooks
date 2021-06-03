import { Button } from '@material-ui/core';
import React from 'react';
import { Box } from '@fower/react';
type TopProps = {

};

export const Top: React.FC<TopProps> = () => {
  return (
    <Box toCenter column>
      <Button
        variant='contained'
        color='primary'
        onClick={() => { }}
      >
        サインアップ
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={() => { }}
      >
        メールアドレスでログイン
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={() => { }}
      >
        Googleアカウントでログイン
      </Button>
    </Box>
  );
};