import React from 'react';
import Link from 'next/link';
import { Box } from '@fower/react';

type MenuProps = {

};

export const Menu: React.FC<MenuProps> = () => {
  return (
    <Box toCenter mb10>
      <Box px-16 py-12 cursorPointer bgOrange300--hover><Link href='/'><a>Home</a></Link></Box>
      <Box px-16 py-12 cursorPointer bgOrange300--hover><Link href='/books'><a>Books</a></Link></Box>
      <Box px-16 py-12 cursorPointer bgOrange300--hover><Link href='/books/new'><a>Create</a></Link></Box>
      <Box px-16 py-12 cursorPointer bgOrange300--hover><Link href='/books/aaa/edit'><a>Edit</a></Link></Box>
      <Box px-16 py-12 cursorPointer bgOrange300--hover><Link href='/books/aaa/test'><a>Test</a></Link></Box>
    </Box>
  );
};