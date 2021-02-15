import { Button, ButtonGroup, Card } from '@material-ui/core'
import React from 'react'
import { wordbook, Wordbook } from './recoil'
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { AddWordModal } from './components/Modal/AddWordModal';

type BookCardProps = {
  book: Wordbook
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const router = useRouter()
  const setBook = useSetRecoilState(wordbook)
  const [isAdding, setIsAdding] = React.useState(false)
  const openView = (id: string) => {
    if (book.words.length === 0) return alert('⚠️Wordがありません！')
    setBook(book)
    router.push(`/review/${id}`)
  }
  const openDetail = (id: string) => {
    setBook(book)
    router.push(`/edit/${id}`)
  }
  return (
    <Card className='mb-16 p-16' key={book.id}>
      <div>{book.title}</div>
      {book.description && <div>{book.description}</div>}
      <ButtonGroup color="primary">
        <Button onClick={() => openDetail(book.id)}>edit</Button>
        <Button onClick={() => setIsAdding(true)}>add word</Button>
        <Button onClick={() => openView(book.id)}>open</Button>
      </ButtonGroup>
      <AddWordModal open={isAdding} close={() => setIsAdding(false)} bookId={book.id} addedRoute={() => openDetail(book.id)} />
    </Card>
  )
}
