import React from 'react';
import { CreateBook } from '../../src/components/CreateBook';
import { Box } from '@fower/react';

type NewProps = {

};

const New: React.FC<NewProps> = () => {
  return (
    <div>
      <Box text2XL toCenter>Create Book</Box>
      <CreateBook />
      <Box m8 p4>
        <Box m4>Bookの新規作成ができます.</Box>
        <Box m4>Bookとはテストをする問題の集合を表します.</Box>
      </Box>
    </div>
  );
};

export default New;