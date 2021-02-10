import React from 'react'
import { useRecoilValue } from 'recoil'
import { wordbook } from './recoil'
import { useRouter } from 'next/router'

type ReviewProps = {

}

export const Review: React.FC<ReviewProps> = () => {
  const book = useRecoilValue(wordbook)
  const [dice, set] = React.useState(Math.floor(Math.random() * book.words.length))
  const word = book.words[dice]
  const [openHint, setOpenHint] = React.useState(false)
  const router = useRouter()

  const nextWord = () => {
    // 同じWordは連続して表示しない
    let afterDice = dice
    while (afterDice === dice) {
      afterDice = Math.floor(Math.random() * book.words.length)
    }
    set(afterDice)
  }

  return (
    <div>
      <div>Can I rememeber?</div>
      <div>{word.word}</div>
      { openHint && <div>{word.hint}</div>}
      {word.hint && <button onClick={() => setOpenHint(true)}>Hint💡</button>}
      <a href={`https://www.google.com/search?q=${word.word}`} target='_blank' rel="noopener noreferrer">Search🔎</a>
      <button onClick={nextWord}>next➡️</button>
      <button onClick={() => router.push('/mypage')}>mypageに戻る</button>
    </div>
  )
}
