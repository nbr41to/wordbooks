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

// Sample
export const user = atom<{ name: string, mylist: Wordbook[] }>({
  key: 'userState',
  default: {
    name: 'nob',
    mylist: [
      {
        id: '123', title: 'psychology', description: '説明文説明文説明文説明文説明文説明文説明文',
        words: [
          { word: '偽の合意性効果', searchCount: 0, hint: '総意誤認効果とも言う' },
          { word: '内集団バイアス', searchCount: 3 },
          { word: 'ヒューリスティクス', searchCount: 1, hint: 'hint' },
        ]
      },
      {
        id: '456', title: 'programming',
        words: [
          { word: 'HTML', searchCount: 0, hint: 'hint' },
          { word: 'CSS', searchCount: 3 },
          { word: 'Sass', searchCount: 1, hint: 'hint' },
        ]
      },
      {
        id: '789', title: '話題一覧', description: '説明文説明文説明文説明文説明文説明文説明文',
        words: [
          { word: '青椒肉絲', searchCount: 0, hint: 'hint' },
          { word: '引っ越し', searchCount: 3 },
          { word: '手の皮が厚い', searchCount: 1 },
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
