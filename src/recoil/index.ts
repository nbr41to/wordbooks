import { atom } from 'recoil';

export interface Word {
	word: string;
	passCount: number;
	searchCount: number;
	hint?: string;
}

export interface Wordbook {
	id: string;
	title: string;
	description?: string;
	createdBy: string;
	usedBy: string[];
	words: Word[];
}

export interface User {
	uid: string;
	name: string;
	myBooks: Wordbook[];
}

export const user = atom<User>({
	key: 'userState',
	default: null,
});

export const wordbook = atom<Wordbook>({
	key: 'wordbookState',
	default: null,
});
