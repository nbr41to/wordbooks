import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box } from '@fower/react';
import { getUserId } from 'src/firebase/auth';

type MenuProps = {

};

export const Menu: React.FC<MenuProps> = () => {
  const [login, setLogin] = useState<string | null>(null);
  useEffect(() => {
    setLogin(getUserId());
  }, []);
  console.log(login);

  if (login) {
    return (
      <Box toCenter mb10>
        <>
          <Link href='/'>
            <Box as='a' px-20 py-12 cursorPointer bgOrange300--active>Home</Box>
          </Link>
          <Link href='/books'>
            <Box as='a' px-20 py-12 cursorPointer bgOrange300--active>Books</Box>
          </Link>
          <Link href='/books/new'>
            <Box as='a' px-20 py-12 cursorPointer bgOrange300--active>Create</Box>
          </Link>
          {/* 開発用 */}
          {/* <Link href='/books/WDOkLX0HhGsZ5yJNlWQ0/edit'>
            <Box as='a' px-16 py-12 cursorPointer bgOrange300--hover>Edit</Box>
            </Link>
            <Link href='/books/WDOkLX0HhGsZ5yJNlWQ0/test'>
            <Box as='a' px-16 py-12 cursorPointer bgOrange300--hover>Test</Box>
          </Link> */}
        </>
      </Box>
    );
  } else {
    return null;
  }
};