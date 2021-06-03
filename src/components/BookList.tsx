import React, { useEffect, useState } from 'react';
import { getBooks } from '../firebase/firestore';
import { Box } from '@fower/react';
import Router from 'next/router';
import { Wordbook } from '../../types/index';
import { Button } from '@material-ui/core';

type BookListProps = {

};

export const BookList: React.FC<BookListProps> = () => {
  const [bookList, setBookList] = useState<Wordbook[]>([]);

  useEffect(() => {
    getBooks().then(data => setBookList(data));
  }, []);

  return (
    <div>
      {bookList?.map(book => {
        const { id, name, description } = book;
        return (
          <Box key={id} border-2 p4 m2 cursorPointer toAround rounded-8>
            <Box onClick={() => Router.push(`/books/${id}/edit`)}>
              <Box text-16 mb2>{name}</Box>
              <Box text-12>説明: {description}</Box>
            </Box>
            <Box>
              <Button variant='outlined' onClick={() => Router.push(`/books/${id}/test`)}>テスト開始</Button>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};