import React from 'react'
import { useSetRecoilState, useRecoilState } from 'recoil';
import { user } from './recoil'
import { useRouter } from 'next/router'
import { wordbook } from './recoil/index';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { firebase } from './firebase';
import { AddBookModal } from './components/Modal/AddBookModal';
import { BookCard } from './BookCard';
type MylistProps = {

}

export const Mylist: React.FC<MylistProps> = () => {
  const [userInfo, setUserInfo] = useRecoilState(user)
  const setBook = useSetRecoilState(wordbook)
  const [isAdding, setIsAdding] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
  }, [])

  return (
    <div>
      <StyledLoginMessage> ようこそ{userInfo.name} さん</StyledLoginMessage>
      <div className='fsbc mb-16'>
        <StyledBookTitle>My Wordbook List</StyledBookTitle>
        <Button variant="contained" color="primary" onClick={() => setIsAdding(true)}>bookを追加</Button>
        <AddBookModal open={isAdding} close={() => setIsAdding(false)} />
      </div>
      {userInfo.myBooks.map(book => <BookCard book={book} />)}
    </div>
  )
}

const StyledLoginMessage = styled.h3`
  font-size: 20px;
`
const StyledBookTitle = styled.h3`
  font-size: 24px;
`
