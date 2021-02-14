import { atom } from 'recoil'

export interface Word {
  word: string
  searchCount: number
  hint?: string
}

export interface Wordbook {
  id: string
  title: string
  description?: string
  words: Word[]
}
export interface User {
  uid: string
  name: string
  myBooks: Wordbook[]
}



// Sample
export const user = atom<User>({
  key: 'userState',
  default: {
    uid: 'aaa',
    name: 'nob',
    myBooks: [
      {
        id: '123', title: 'psychology', description: '説明文説明文説明文説明文説明文説明文説明文',
        words: [
          { word: '偽の合意性効果', searchCount: 0 },
          { word: '内集団バイアス', searchCount: 3 },
          { word: 'ヒューリスティクス', searchCount: 1 },
        ]
      },
      {
        id: '456', title: 'programming',
        words: [
          { word: '偽の合意性効果', searchCount: 0 },
          { word: '内集団バイアス', searchCount: 3 },
          { word: 'ヒューリスティクス', searchCount: 1 },
        ]
      },
      {
        id: '789', title: '話題一覧', description: '説明文説明文説明文説明文説明文説明文説明文',
        words: [
          { word: '偽の合意性効果', searchCount: 0 },
          { word: '内集団バイアス', searchCount: 3 },
          { word: 'ヒューリスティクス', searchCount: 1 },
        ]
      },
    ]
  }
})

export const wordbook = atom<Wordbook>({
  key: 'wordbookState',
  default: {
    id: '123', title: 'psychology', words: [
      { word: '偽の合意性効果', searchCount: 0 },
      { word: '内集団バイアス', searchCount: 3 },
      { word: 'ヒューリスティクス', searchCount: 1 },
    ]
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
