import { firebase } from '.'
import shortid from 'shortid'

export const getUser = () => {
  const user = firebase.auth().currentUser
  if (!user) return null
}

// 新しいBookを追加
export const addBook = (title: string, description: string) => {
  const user = firebase.auth().currentUser
  const uid = user.uid
  const id = shortid.generate()
  // データを追加
  firebase.firestore().collection('wordbooks').doc(id).set({
    id,
    title,
    description,
    createdBy: uid,
    usedBy: [uid],
    words: [],
  })
}

// 新しいWordを追加
export const addWord = (bookId: string, word: string, hint?: string) => {
  firebase.firestore().collection('wordbooks').doc(bookId).update({
    words: firebase.firestore.FieldValue.arrayUnion({
      word,
      hint,
      passCount: 0,
      searchCount: 0,
    })
  });
}

