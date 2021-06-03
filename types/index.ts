import { firebase } from '../src/firebase';

export type User = {
  id: string;
  name: string;
  bookIds: string[];
};

export type BooksInfo = {
  id: string;
  name: string;
  description?: string;
  started: firebase.firestore.FieldValue;
  previous: firebase.firestore.FieldValue;
};

export type Word = {
  id: string;
  question: string;
  answer: string;
  rightCount: number;
  tryCount: number;
  hint?: string;
};

export interface Wordbook {
  id: string;
  name: string;
  description?: string;
  createdBy: firebase.firestore.FieldValue;
  words: Word[];
}
