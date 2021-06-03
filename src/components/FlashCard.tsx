import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Box } from '@fower/react';

type FlashCardProps = {
  question: string,
  answer: string,
  selects: string[],
  selected: (select: string) => void,
};

export const FlashCard: React.FC<FlashCardProps> = ({ question, answer, selects, selected }) => {
  console.log(question, answer, selects, selected);
  // useEffect(() => {
  //   createSelects()
  // }, []);

  const createSelects = () => {
    if (!selects) return;
    const selectOptions = [];
    const otherThanAnswer = selects.filter(select => select !== answer);
    for (let i = 0; selectOptions.length < 3; i++) {
      const dice = Math.floor(Math.random() * otherThanAnswer.length);
      if (!selectOptions.includes(otherThanAnswer[dice])) {
        /* 重複チェック */
        selectOptions.push(otherThanAnswer[dice]);
      }
    }
    selectOptions.push(answer);

    /* シャッフル */
    for (let i = selectOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = selectOptions[i];
      selectOptions[i] = selectOptions[j];
      selectOptions[j] = tmp;
    }
    return selectOptions;
  };

  return (
    <Box border-2 rounded-8 p4 m4 w='100%'>
      <Box mb4>Q. {question}</Box>
      <Box toLeft column>
        {createSelects()?.map((select, index) => <Button key={index} onClick={() => selected(select)}>{index + 1}. {select}</Button>)}
      </Box>
    </Box>
  );
};