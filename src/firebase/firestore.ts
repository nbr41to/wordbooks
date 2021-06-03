import { firebase, db } from '.';
import { Wordbook } from '../../types';
import { nanoid } from 'nanoid';
import { getUserId } from './auth';

const users = db.collection('users');
const books = db.collection('books');

/* Bookの作成 */

export const createBook = async (name: string, description?: string) => {
  try {
    const userId = getUserId();
    const newDoc = books.doc();
    await newDoc.set({
      id: newDoc.id,
      name,
      description,
      createdBy: firebase.firestore.FieldValue.serverTimestamp(),
      words: [],
    });
    await users.doc(userId).update({
      bookIds: firebase.firestore.FieldValue.arrayUnion(newDoc.id),
    });
  } catch (error) {
    console.log(error);
  }
};

/* Bookの取得 */
export const getBook = async (bookId: string) => {
  const data = await books.doc(bookId).get();
  return data.data() as Wordbook;
};

/* UserのBooksの取得 */
export const getBooks = async (): Promise<Wordbook[]> => {
  try {
    const data: Wordbook[] = [];
    /* userのbookIdsの取得 */
    const userId = getUserId();
    if (!userId) return;
    const snapshot = await users.doc(userId).get();
    const userBookIds = snapshot.data().bookIds;
    /* bookの情報をそれぞれのbookIdから取得 */
    await Promise.all(
      userBookIds.map(async (id) => {
        const snapshot = await books.doc(id).get();
        const book = snapshot.data() as Wordbook;
        data.push(book);
      })
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
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

/* Userの名前を変更 */
export const updateUserName = async (userId: string, name: string) => {
  await users.doc(userId).update({ name });
};
