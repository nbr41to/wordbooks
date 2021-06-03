import { Box } from '@fower/react';
import React from 'react';
import { BookList } from '../../src/components/BookList';

type BooksProps = {

};

const Books: React.FC<BooksProps> = () => {
  return (
    <div>
      <Box text2XL toCenter>Book List</Box>
      <BookList />
    </div>
  );
};

export default Books;