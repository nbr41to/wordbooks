import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { user } from './recoil'
import { useRouter } from 'next/router'
import { wordbook } from './recoil/index';
type MylistProps = {

}

export const Mylist: React.FC<MylistProps> = () => {
  const userInfo = useRecoilValue(user)
  const setBook = useSetRecoilState(wordbook)
  const mylist = userInfo.mylist
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  const openView = (id: string) => {
    setBook(mylist.find(list => list.id === id))
    router.push(`/review/${id}`)
  }

  return (
    <div>
      <h2>ようこそ{userInfo.name}さん</h2>
      <h3>My Wordbook List</h3>
      <button>bookを追加</button>
      {mylist.map(list =>
        <div key={list.id}>
          <div>{list.title}</div>
          {list.description && <div>{list.description}</div>}
          <button>edit</button>
          <button onClick={() => openView(list.id)}>open</button>
        </div>
      )}
    </div>
  )
}
