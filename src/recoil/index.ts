import { atom } from 'recoil'

export interface Word {
  word: string
  passCount: number
  searchCount: number
  hint?: string
}

export interface Wordbook {
  id: string
  title: string
  description?: string
  createdBy: string
  usedBy: string[]
  words: Word[]
}

export interface User {
  uid: string
  name: string
  myBooks: Wordbook[]
}

export const user = atom<User>({
  key: 'userState',
  default: {
    uid: '',
    name: '',
    myBooks: [],
  }
})

export const wordbook = atom<Wordbook>({
  key: 'wordbookState',
  default: {
    id: '',
    title: '',
    createdBy: '',
    usedBy: [],
    words: [],
  }
})

// export const user = atom<{ name: string, mylist: Wordbook[] }>({
//   key: 'userState',
//   default: {
//     name: '',
//     mylist: []
//   }
// })

// export const wordbook = atom<Wordbook>({
//   key: 'wordbookState',
//   default: {
//     id: '',
//     title: '',
//     words: [],
//   }
// })
