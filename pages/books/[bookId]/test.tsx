import { Box } from '@fower/react';
import { TestingBook } from 'src/components/TestingBook';

type TestProps = {

};

const Test: React.FC<TestProps> = () => {
  return (
    <div>
      <Box text2XL toCenter>Test Book</Box>
      <TestingBook />
    </div>
  );
};

export default Test;