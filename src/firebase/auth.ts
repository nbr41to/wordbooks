import { firebase, auth, db } from '.';

const users = db.collection('users');

/**
 * アカウント作成
 */

export type EmailAndPassword = { email: string; password: string };

/* Email でアカウントの作成 */
export const signupEmail = async (input: EmailAndPassword):Promise<boolean> => {
  try {
    const { email, password } = input;
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const id = userCredential.user.uid;
    await users.doc(id).set({
      id,
      name: 'ななシン',
      bookIds: [],
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/* Email でログイン */
export const signinEmail = async (input: EmailAndPassword) => {
  const { email, password } = input;
  const userCredential = await auth.signInWithEmailAndPassword(email, password);
  // console.log(userCredential);
  return userCredential.user;
};

/* Google でログイン */
export const signinGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const userCredential = await auth.signInWithPopup(provider);
  return userCredential.user;
};

/* ログアウト */
export const logout = () => {
  auth
    .signOut()
    .then(() => {
      alert('ログアウトしました');
    })
    .catch((error) => {
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
};
