import { firebase, db } from '.';
import { Wordbook } from '../../types';
import { nanoid } from 'nanoid';
const books = db.collection('books');

/* Bookの作成 */

export const createBook = async (name: string, description?: string) => {
  const newDoc = books.doc();
  await newDoc.set({
    id: newDoc.id,
    name,
    description,
    createdBy: firebase.firestore.FieldValue.serverTimestamp(),
    words: [],
  });
};

/* Bookの取得 */
export const getBook = async (bookId: string) => {
  const data = await books.doc(bookId).get();
  return data.data() as Wordbook;
};

/* Booksの取得 */
export const getBooks = async () => {
  const snapshot = await books.get();
  const data = snapshot.docs.map((doc) => doc.data() as Wordbook);
  return data;
};

/* Wordの追加 */
export const addWord = async (input: InputAddWord) => {
  const { bookId, question, answer, hint = '' } = input;
  const wordId = nanoid(8);
  await books.doc(bookId).update({
    words: firebase.firestore.FieldValue.arrayUnion({
      id: wordId,
      question,
      answer,
      hint,
      rightCount: 0,
      tryCount: 0,
    }),
  });
};
interface InputAddWord {
  bookId: string;
  question: string;
  answer: string;
  hint?: string;
}
