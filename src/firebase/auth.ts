import { firebase, auth, db } from '.';

export const users = db.collection('users');

/* ログイン状態の確認 */

export const getUserId = () => auth.currentUser?.uid;
// export const userCheck = () => {
//   auth.onAuthStateChanged((user) => {
//     // console.log(user);
//     return user;
//   });
// };

/**
 * アカウント作成
 */

export type EmailAndPassword = { email: string; password: string };

/* Email でアカウントの作成 */
export const signupEmail = async (
  input: EmailAndPassword
): Promise<boolean> => {
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
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const userCredential = await auth.signInWithPopup(provider);
    const id = userCredential.user.uid;
    const userInfo = await users.doc(id).get();
    if (!userInfo.exists) {
      await users.doc(id).set({
        id,
        name: 'ななシン',
        bookIds: [],
      });
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
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
