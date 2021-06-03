import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Box } from '@fower/react';
import { createBook } from '../firebase/firestore';

type CreateBookProps = {

};

export const CreateBook: React.FC<CreateBookProps> = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e) => {
    e.preventDefault();
    createBook(name, description);
  };

  return (
    <Box as='form' onSubmit={submit} toCenter column>
      <FormControl>
        <InputLabel>Book name</InputLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
        <FormHelperText >Bookの名前</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Description</InputLabel>
        <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        <FormHelperText >Bookの説明（任意）</FormHelperText>
      </FormControl>
      <Button variant='outlined' type='submit' >Create</Button>
    </Box>
  );
};