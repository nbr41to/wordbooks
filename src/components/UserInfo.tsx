import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import { Box } from '@fower/react';
import { updateUserName } from 'src/firebase/firestore';
import { getUserId } from '../firebase/auth';
type UserInfoProps = {

};

export const UserInfo: React.FC<UserInfoProps> = () => {
  const [name, setName] = useState('');

  const update = () => {
    if (!name) return alert('入力してください');
    updateUserName(getUserId(), name);
    setName('');
  };

  return (
    <Box toCenter column>
      <FormControl>
        <InputLabel>Your name</InputLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <Button onClick={update}>Update</Button>
    </Box>
  );
};