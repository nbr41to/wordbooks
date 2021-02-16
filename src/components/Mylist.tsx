import React from 'react'
import { useSetRecoilState, useRecoilState } from 'recoil';
import { user, Wordbook } from '../recoil'
import { useRouter } from 'next/router'
import { wordbook } from '../recoil/index';
import styled from 'styled-components';
import { firebase } from '../firebase';
import { AddBookModal } from './Modal/AddBookModal';
import { BookCard } from './templates/BookCard';
import { Button } from './atoms/Button';
import { logout } from '../firebase/functions';
type MylistProps = {

}

export const Mylist: React.FC<MylistProps> = ({ ...props }) => {
  console.log(props)
  const [userInfo, setUserInfo] = useRecoilState(user)
  const setBook = useSetRecoilState(wordbook)
  const [isAdding, setIsAdding] = React.useState(false)
  const router = useRouter()
  const getMyBooks = () => {
    const user = firebase.auth().currentUser
    if (user) {
      const uid = user.uid
      firebase.firestore().collection('wordbooks').where('usedBy', 'array-contains', uid).onSnapshot((snapshot) => {
        const myBooks = snapshot.docs.map(doc => doc.data()) as Wordbook[]
        setUserInfo({ ...userInfo, myBooks })
      })
    }
  }
  console.log(userInfo)

  React.useEffect(() => {
    getMyBooks()
    console.log(userInfo)
  }, [])
  return (
    <>
      {userInfo &&
        <div>
          <StyledLoginMessage> ようこそ{userInfo.name} さん</StyledLoginMessage>
          <div className='fsbc mb-16'>
            <StyledBookTitle>My Wordbook List</StyledBookTitle>
            <Button bgColor="orange" onClick={() => setIsAdding(true)}>bookを追加</Button>
            <AddBookModal open={isAdding} close={() => setIsAdding(false)} />
          </div>
          {userInfo.myBooks.map(book => <BookCard book={book} key={book.id} />)}
        </div>
      }
      <Button onClick={logout}>ログアウト</Button>
    </>
  )
}

const StyledLoginMessage = styled.h3`
  font-size: 20px;
`
const StyledBookTitle = styled.h3`
  font-size: 24px;
`
