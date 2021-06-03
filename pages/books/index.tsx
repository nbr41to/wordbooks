import React from 'react';
import { BookList } from '../../src/components/BookList';

type BooksProps = {

};

const Books: React.FC<BooksProps> = () => {
  return (
    <div>
      <h1>Book List</h1>
      <BookList />
    </div>
  );
};

export default Books;