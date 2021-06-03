import { atom } from 'recoil';
import { User, Wordbook } from '../../types';

// export const user = atom<User | null>({
//   key: 'userState',
//   default: null,
// });

export const wordbook = atom<Wordbook | null>({
  key: 'wordbookState',
  default: null,
});
