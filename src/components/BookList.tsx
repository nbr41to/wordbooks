import React, { useEffect, useState } from 'react';
import { getBooks } from '../firebase/firestore';
import { Box } from '@fower/react';
import Router from 'next/router';

type BookListProps = {

};

export const BookList: React.FC<BookListProps> = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    getBooks().then(data => setBookList(data));
  }, []);
  // console.log(bookList);
  return (
    <div>
      {bookList.map(book => {
        const { id, name, description } = book;
        return (
          <Box key={id} border-2 p2 m2 cursorPointer onClick={() => Router.push(`/books/${id}/edit`)}>
            <Box>{name}</Box>
            <Box>{description}</Box>
          </Box>
        );
      })}
    </div>
  );
};