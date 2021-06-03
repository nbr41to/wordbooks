import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getBook } from 'src/firebase/firestore';
import { wordbook } from 'src/recoil';
import { Box } from '@fower/react';
import { FlashCard } from './FlashCard';

type TestingBookProps = {

};

export const TestingBook: React.FC<TestingBookProps> = () => {
  const [bookInfo, setBookInfo] = useRecoilState(wordbook);
  const [numOfQuestion, setNumOfQuestion] = useState('10');
  const [selects, setSelects] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testStatus, setTestStatus] = useState<'ready' | 'doing' | 'finish'>('ready');

  useEffect(() => {
    const bookId = location.pathname.split('/')[2];
    getBook(bookId).then(data => setBookInfo(data));

  }, []);

  const prep = () => {
    setTestStatus('doing');
    setSelects(bookInfo?.words.map(word => word.answer));
  };

  console.log(bookInfo);

  const selected = () => {
    if (bookInfo?.words.length === currentQuestion + 1) {
      setTestStatus('finish');
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <Box>
        <Box>{bookInfo?.name}</Box>
        <Box>{bookInfo?.description}</Box>
      </Box>
      <Box toCenter column>
        <TextField variant='outlined' type='number'
          value={numOfQuestion}
          onChange={(e) => setNumOfQuestion(e.target.value)}
        />
        {testStatus === 'ready' && <Button onClick={prep}>Start</Button>}
        {testStatus === 'doing' &&
          <FlashCard
            question={bookInfo?.words[currentQuestion].question}
            answer={bookInfo?.words[currentQuestion].answer}
            selects={selects}
            selected={() => selected()}
          />
        }
        {testStatus === 'finish' && <>終了</>}
      </Box>
    </div>
  );
};