import React, { useState } from 'react';
import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core';
import { Box } from '@fower/react';
import { addWord } from '../firebase/firestore';

type AddWordProps = {
  bookId: string;
};

export const AddWord: React.FC<AddWordProps> = ({ bookId }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const submit = (e) => {
    e.preventDefault();
    addWord({ bookId, question, answer });
  };

  return (
    <div>
      <Box as='form' onSubmit={submit} toCenter column>
        <FormControl>
          <InputLabel>Question</InputLabel>
          <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
          <FormHelperText>問題文</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Answer</InputLabel>
          <Input value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <FormHelperText>解答（単語が望ましい）</FormHelperText>
        </FormControl>
        <Button variant='outlined' type='submit'>Add</Button>
      </Box>
    </div>
  );
};