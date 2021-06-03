import React, { useEffect, useState } from 'react';
import { getBooks } from '../firebase/firestore';
import { Box } from '@fower/react';
import Router from 'next/router';
import { Word, Wordbook } from '../../types/index';
import { Button, ButtonGroup } from '@material-ui/core';

type BookListProps = {

};

export const BookList: React.FC<BookListProps> = () => {
  const [bookList, setBookList] = useState<Wordbook[]>([]);

  useEffect(() => {
    getBooks().then(data => setBookList(data));
  }, []);

  const testStart = (id: string, words: Word[]) => {
    if (words.length < 4) return alert('Wordが4つ以上ないBookではテストをすることができません。Wordを追加してください');
    Router.push(`/books/${id}/test`);
  };

  return (
    <div>
      {!bookList?.length &&
        <Box toCenter column border-2 rounded-8 py4 m8>
          <Box my2>Bookがありません</Box>
          <Box my2>上の + New ボタンから</Box>
          <Box my2>新しいBookを作成しましょう！</Box>
        </Box>
      }
      {bookList?.map(book => {
        const { id, name, description, words } = book;
        return (
          <Box key={id} border-2 p4 m2 toAround rounded-8>
            <Box cursorPointer onClick={() => testStart(id, words)}>
              <Box text-16 mb2>{name}</Box>
              <Box text-12>説明: {description}</Box>
            </Box>
            <Box>
              <ButtonGroup variant='outlined' color='primary'>
                <Button onClick={() => Router.push(`/books/${id}/edit`)}>Edit</Button>
                <Button onClick={() => testStart(id, words)}>Test</Button>
              </ButtonGroup>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};