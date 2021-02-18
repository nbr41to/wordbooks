import React from 'react';
import { firebase } from './firebase';
import { useRecoilValue } from 'recoil';
import { wordbook } from './recoil';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

type ReviewProps = {

}

export const Review: React.FC<ReviewProps> = () => {
  const book = useRecoilValue(wordbook);
  const [dice, set] = React.useState(Math.floor(Math.random() * book.words.length));
  const word = book.words[dice];
  const [openHint, setOpenHint] = React.useState(false);
  const [searched, setSearched] = React.useState(false);
  const router = useRouter();

  const next = () => {
    let afterDice = dice;
    while (afterDice === dice) {
      afterDice = Math.floor(Math.random() * book.words.length);
    }
    if (!searched) {
      firebase.firestore().collection('wordbooks').doc(book.id).update({
        passCount: firebase.firestore.FieldValue.increment(1)
      }).then(() => {
        setOpenHint(false);
        set(afterDice);
      }).catch(() => {
        alert('⚠️エラーが発生しました。もう一度お試しください。');
      });
    } else {
      firebase.firestore().collection('wordbooks').doc(book.id).update({
        searchCount: firebase.firestore.FieldValue.increment(1)
      }).then(() => {
        setOpenHint(false);
        setSearched(false);
        set(afterDice);
      }).catch(() => {
        alert('⚠️エラーが発生しました。もう一度お試しください。');
      });
    }
  };

  return (
    <div>
      <div>Can I rememeber?</div>
      <div>{word.word}</div>
      { openHint && <div>{word.hint}</div>}
      {word.hint && <Button variant="outlined" onClick={() => setOpenHint(true)}>Hint💡</Button>}
      <Button variant="outlined" onClick={() => setSearched(true)}>
        <StyledBlankAnker
          href={`https://www.google.com/search?q=${word.word}`}
          target='_blank'
          rel="noopener noreferrer"
        >
          Search🔎
        </StyledBlankAnker>
      </Button>
      <Button variant="outlined" onClick={next}>next➡️</Button>
      <Button variant="outlined" onClick={() => router.push('/mypage')}>mypageに戻る</Button>
    </div>
  );
};

const StyledBlankAnker = styled.a`
  display: block;
  width: 100%;
`;
