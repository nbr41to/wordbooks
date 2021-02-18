import { Button, Input } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { addWord } from '../../firebase/functions';
import { ModalProps, ModalWrapper } from './Modal';

type AddWordModalProps = ModalProps & {
  bookId: string
  addedRoute: () => void
}

export const AddWordModal: React.FC<AddWordModalProps> = ({ open, close, bookId, addedRoute }) => {
  const [word, setword] = React.useState('');
  const [hint, setHint] = React.useState('');
  const submitNewWord = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addWord(bookId, word, hint);
    alert('新しいWordを作成しました！');
    addedRoute();
  };
  return (
    <ModalWrapper open={open} close={close}>
      <form className='fccc' onSubmit={(e) => submitNewWord(e)}>
        <div className='m-8'>Word</div>
        <Input className='mb-16' onChange={(e) => setword(e.target.value)} required autoFocus />
        <div className='m-8'>Hint</div>
        <Input className='mb-16' onChange={(e) => setHint(e.target.value)} />
        <div className='w100 fsbc'>
          <Button variant="contained" color="primary" type='submit'>追加</Button>
          <Button variant="contained" color="primary" onClick={close}>やめる</Button>
        </div>
      </form>
    </ModalWrapper>
  );
};
