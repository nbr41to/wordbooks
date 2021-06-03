import React, { useEffect, useState } from 'react';
import { Wordbook } from '../../types';
import { getBook } from '../firebase/firestore';
import { Box } from '@fower/react';
import { AddWord } from './AddWord';

type WordListProps = {

};

export const WordList: React.FC<WordListProps> = () => {
  const [bookInfo, setBookInfo] = useState<Wordbook>();
  let bookId: string;
  if (process.browser) {
    bookId = location.pathname.split('/')[2];
  }

  useEffect(() => {
    getBook(bookId).then(data => setBookInfo(data));
  }, []);

  return (
    <div>
      <div>title: {bookInfo?.name}</div>
      <div>description: {bookInfo?.description}</div>
      {/* <div>createBy: {bookInfo?.createdBy}</div> */}
      <AddWord bookId={bookId} />
      <div>Word List</div>
      {bookInfo?.words.map(word => {
        const { id, question, answer } = word;
        return (
          <Box key={id} toCenter border-2 p2 m2>
            <Box>{question}</Box>
            <Box>{'　|　'}</Box>
            <Box>{answer}</Box>
          </Box>
        );
      })}
    </div>
  );
};