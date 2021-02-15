import React from 'react'
import { useRecoilValue } from 'recoil'
import { wordbook } from './recoil'
import { useRouter } from 'next/router'
import { Card } from '@material-ui/core'

type EditBookProps = {

}

export const EditBook: React.FC<EditBookProps> = () => {
  const book = useRecoilValue(wordbook)
  const router = useRouter()
  // Titleの編集
  // Descriptionの編集

  // Wordの追加
  // Wordの編集
  // Wordの削除

  return (
    <div>
      <h1>{book.title}</h1>
      <div>説明</div>
      <div>{book.description}</div>
      {book.words.map(word => <Card className='m-8 p-16'>
        <div className='flex m-4'>
          <div>Word</div>
          <div>{word.word}</div>
        </div>
        <div className='flex m-4'>
          <div>Hint</div>
          <div>{word.hint}</div>
        </div>
        <div className='flex m-4'>
          <div>Number of passed</div>
          <div>{word.passCount}</div>
        </div>
        <div className='flex m-4'>
          <div>Number of searches</div>
          <div>{word.searchCount}</div>
        </div>
      </Card>)}
    </div>
  )
}
