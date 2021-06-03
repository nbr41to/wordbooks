import { Box } from '@fower/react';
import React from 'react';
import { AddWord } from '../../../src/components/AddWord';
import { WordList } from '../../../src/components/WordList';

type EditProps = {

};

const Edit: React.FC<EditProps> = () => {
  return (
    <div>
      <Box text2XL toCenter>Edit Book</Box>
      <WordList />
    </div>
  );
};

export default Edit;