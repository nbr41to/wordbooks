import React from 'react';
import { firebase } from '../firebase';
import { user, User, Wordbook } from '.';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

type SubscribeFirebaseProps = {

}

export const SubscribeFirebase: React.FC<SubscribeFirebaseProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useRecoilState(user);
  // const [myBooks, setMyBooks] = React.useState<Wordbook[]>([])
  const router = useRouter();
  // ログインチェック
  // ユーザ情報取得（uidとname）

  const getMyBooks = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      const uid = user.uid;
      firebase.firestore().collection('wordbooks').where('usedBy', 'array-contains', uid).onSnapshot((snapshot) => {
        const myBooks = snapshot.docs.map(doc => doc.data()) as Wordbook[];
        setUserInfo({ ...userInfo, myBooks });
      });
    }
  };

  React.useEffect(() => {
    getMyBooks();
  }, []);

  return <>{children}</>;
};
