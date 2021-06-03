import React from 'react';
import { AddWord } from '../../../src/components/AddWord';
import { WordList } from '../../../src/components/WordList';

type EditProps = {

};

const Edit: React.FC<EditProps> = () => {
  return (
    <div>
      <h1>Edit Book</h1>
      <WordList />
    </div>
  );
};

export default Edit;