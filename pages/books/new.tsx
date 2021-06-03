import React from 'react';
import { CreateBook } from '../../src/components/CreateBook';

type NewProps = {

};

const New: React.FC<NewProps> = () => {
  return (
    <div>
      <h1>Create Book</h1>
      <CreateBook />
    </div>
  );
};

export default New;