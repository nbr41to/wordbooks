import React from 'react'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { user } from './recoil'
import { useRouter } from 'next/router'
import { wordbook } from './recoil/index';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { ButtonGroup } from '@material-ui/core';
import styled from 'styled-components';
import { addBook, getBook, getMyListBooks } from './firebase/functions';

type MylistProps = {

}

export const Mylist: React.FC<MylistProps> = () => {
  const [userInfo, setUserInfo] = useRecoilState(user)
  const setBook = useSetRecoilState(wordbook)
  const mylist = userInfo.mylist
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  const openView = (id: string) => {
    setBook(mylist.find(list => list.id === id))
    router.push(`/review/${id}`)
  }
  React.useEffect(() => {
    setUserInfo({
      ...userInfo,
      mylist: getMyListBooks()
    })
  }, [])
  // const books = getMyListBooks()
  console.log(userInfo.mylist)
  return (
    <div>
      <StyledLoginMessage> ようこそ{userInfo.uid} さん</StyledLoginMessage>
      <div className='fsbc mb-16'>
        <StyledBookTitle>My Wordbook List</StyledBookTitle>
        <Button variant="contained" color="primary" onClick={() => addBook('titleee', 'descriptionnnn')}>bookを追加</Button>
      </div>
      {userInfo.mylist.map(book =>
        <Card className='mb-16 p-16' key={book.id}>
          <div>{book.title}</div>
          {book.description && <div>{book.description}</div>}
          <ButtonGroup color="primary">
            <Button onClick={() => { }}>add word</Button>
            <Button onClick={() => openView(book.id)}>open</Button>
            <Button>edit</Button>
          </ButtonGroup>
        </Card>
      )}
    </div>
  )
}

const StyledLoginMessage = styled.h3`
  font-size: 20px;
`
const StyledBookTitle = styled.h3`
  font-size: 24px;
`
