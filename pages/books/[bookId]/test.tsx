import React from 'react';
import { TestingBook } from '../../../src/components/TestingBook';

type TestProps = {

};

const Test: React.FC<TestProps> = () => {
  return (
    <div>
      <h1>Test Book</h1>
      <TestingBook />
    </div>
  );
};

export default Test;