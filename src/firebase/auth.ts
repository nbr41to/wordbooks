import { firebase, auth, db } from '.';

/**
 * アカウント作成
 */

export type EmailAndPassword = { email: string; password: string };

/* Email でアカウントの作成 */
export const signupEmail = async (input: EmailAndPassword) => {
  const { email, password } = input;
  const userCredential = await auth.createUserWithEmailAndPassword(
    email,
    password
  );
  const uid = userCredential.user.uid;
  // 作成後,自動でログインされる
  // console.log(userCredential);
  return userCredential.user;
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
