import { firebase } from '.'
import shortid from 'shortid'
import { Wordbook } from '../recoil';

export const getUser = () => {
  const user = firebase.auth().currentUser
  if (!user) return null
}
export const loginObserve = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
}

export const addBook = (title: string, description: string) => {
  const user = firebase.auth().currentUser
  const uid = user.uid
  const id = shortid.generate()
  firebase.firestore().collection('wordbooks').doc(id).set({
    id, title, description,
    words: [
      { word: '偽の合意性効果', searchCount: 0, hint: '総意誤認効果とも言う' },
      { word: '内集団バイアス', searchCount: 3 },
      { word: 'ヒューリスティクス', searchCount: 1, hint: 'hint' },
    ]
  })
  firebase.firestore().collection('user').doc(uid).update({
    mylist: firebase.firestore.FieldValue.arrayUnion(firebase.firestore().collection('wordbooks').doc(id))
  })
}

// My Wordbooksを取得
export const getMyListBooks = () => {
  const user = firebase.auth().currentUser
  const uid = user.uid
  const books: {
    id: string,
    title: string,
    description: string,
  }[] = []
  // mylistのrefを取得
  firebase.firestore().collection('user').doc(uid).get().then(doc => {
    // それを一つ一つget
    doc.data().mylist.forEach((bookRef: firebase.firestore.DocumentReference) => {
      bookRef.get().then(doc => {
        // 必要なものをpush
        const { id, title, description } = doc.data()
        books.push({ id, title, description })
      })
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
