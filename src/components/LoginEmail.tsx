import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { Box } from '@fower/react';
import { signinEmail } from '../firebase/auth';
import Router from 'next/router';

type LoginEmailProps = {

};

export const LoginEmail: React.FC<LoginEmailProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!email && !password) return alert('入力漏れ');
    signinEmail({ email, password });
    setEmail('');
    setPassword('');
    Router.push('/books');
  };

  return (
    <Box border-2 p6 m6>
      <h2>メールアドレスでログイン</h2>
      <Box as='form' onSubmit={submit} toCenter column>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button variant='outlined' type='submit' >Login</Button>
      </Box>
    </Box>
  );
};