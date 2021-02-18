import { Button, Input } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { addBook } from '../../firebase/functions';
import { ModalProps, ModalWrapper } from './Modal';

type AddBookModalProps = ModalProps & {

}

export const AddBookModal: React.FC<AddBookModalProps> = ({ open, close }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const submitNewBook = (e) => {
    e.preventDefault();
    addBook(title, description);
    alert('新しいBookを作成しました！');
    close();
  };
  return (
    <ModalWrapper open={open} close={close}>
      <form className='fccc' onSubmit={(e) => submitNewBook(e)}>
        <div className='m-8'>Book Title</div>
        <Input className='mb-16' onChange={(e) => setTitle(e.target.value)} required autoFocus />
        <div className='m-8'>Description</div>
        <Input className='mb-16' onChange={(e) => setDescription(e.target.value)} />
        <div className='w100 fsbc'>
          <Button variant="contained" color="primary" type='submit'>追加</Button>
          <Button variant="contained" color="primary" onClick={close}>やめる</Button>
        </div>
      </form>
    </ModalWrapper>
  );
};
