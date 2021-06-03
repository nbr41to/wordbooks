import React, { useState } from 'react';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { Box } from '@fower/react';
import { signupEmail } from 'src/firebase/auth';
import Router from 'next/router';

type SignUpEmailProps = {

};

export const SignUpEmail: React.FC<SignUpEmailProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!email && !password && !confirmPassword) return alert('入力漏れ');
    if (password !== confirmPassword) return alert('passwordが不一致');
    signupEmail({ email, password });
    setEmail('');
    setPassword('');
    Router.push('/books');
  };

  return (
    <Box border-2 rounded-8 px12 py6 m6>
      <Box textXL toCenter my2>アカウント新規作成</Box>
      <Box as='form' onSubmit={submit} toCenter column>
        <FormControl fullWidth>
          <InputLabel>Email</InputLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <Box h4 />
        <FormControl fullWidth>
          <InputLabel htmlFor="my-input">Pasword</InputLabel>
          <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Box h4 />
        <FormControl fullWidth>
          <InputLabel htmlFor="my-input">Pasword確認用</InputLabel>
          <Input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </FormControl>
        <Box h4 />
        <Button variant='outlined' fullWidth type='submit'>Create</Button>
      </Box>
    </Box>
  );
};