import { firebase } from '.'
import shortid from 'shortid'
import { Wordbook } from '../recoil';

export const getUser = () => {
  const user = firebase.auth().currentUser
  if (!user) return null
}
// myBooksのidを取得して監視
export const getMyBooksIds = () => {
  const user = firebase.auth().currentUser
  const uid = user.uid
  const MyBooksIds: string[] = []
  firebase.firestore().collection('user').doc(uid).onSnapshot(doc => {
    const userData = doc.data()
    const myBooks: Wordbook[] = userData.myBooks.map((id: string) => ({ id, title: '', words: [] }))
  })
}

// myBooksのidからWordbooksを取得して監視

// 新しいBookを追加
export const addBook = (title: string, description: string) => {
  const user = firebase.auth().currentUser
  const uid = user.uid
  const id = shortid.generate()
  // データを追加
  firebase.firestore().collection('wordbooks').doc(id).set({
    id, title, description,
    words: [
      { word: '偽の合意性効果', searchCount: 0, hint: '総意誤認効果とも言う' },
      { word: '内集団バイアス', searchCount: 3 },
      { word: 'ヒューリスティクス', searchCount: 1, hint: 'hint' },
    ]
  })
  // My Wardbooks Listに追加
  firebase.firestore().collection('user').doc(uid).update({
    myBooks: firebase.firestore.FieldValue.arrayUnion(id)
  })
}

// My Wordbooks のWords以外のデータを取得
export const getMyBooks = async (): Promise<any> => {
  const user = firebase.auth().currentUser
  const uid = user.uid
  const books: {
    id: string,
    title: string,
    description: string,
  }[] = []
  const bookRefs: firebase.firestore.DocumentReference[] = []
  // mylistのrefを取得
  await firebase.firestore().collection('user').doc(uid).get().then(doc => {
    // それを一つ一つget
    doc.data().mylist.forEach((bookRef: firebase.firestore.DocumentReference) => {
      console.log(bookRef)
      bookRefs.push(bookRef)
      // bookRef.get().then(doc => {
      //   // 必要なものをpush
      //   const { id, title, description } = doc.data()
      //   books.push({ id, title, description })
      // })
    })
  })
  bookRefs.map((bookRef: firebase.firestore.DocumentReference) => {
    bookRef.get().then((doc) => {
      const { id, title, description } = doc.data()
      books.push({ id, title, description })
    })
  })
  return books
}

// book単体を取得
export const getBook = (ref: firebase.firestore.DocumentReference) => {
  let book = {}
  ref.get().then(doc => book = doc.data())
  return book
}
