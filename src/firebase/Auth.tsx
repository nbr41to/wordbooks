import { firebase } from '../firebase';
import React from 'react'
import { useRecoilState } from 'recoil';
import { User, user, Wordbook } from '../recoil/index';

type AuthProps = {

}

export const Auth: React.FC<AuthProps> = () => {
  const [userInfo, setUserInfo] = useRecoilState(user)
  const loginObserve = React.useCallback(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        const uid = user.uid
        firebase.firestore().collection('user').doc(uid).onSnapshot(doc => {
          const userData = doc.data()
          const { uid, name } = userData as User
          const myBooks: Wordbook[] = userData.myBooks.map((id: string) => ({ id, title: '', words: [] }))
          setUserInfo({ uid, name, myBooks })
        })
      } else {
        // No user is signed in.
      }
    });
    // userInfo.myBooks.forEach((book) => {
    //   firebase.firestore().collection('wordbooks').where('id', '==', book.id).onSnapshot(snapshot => {
    //     console.log('get: ' + book.id)
    //     snapshot.forEach((doc) => {
    //       console.log(doc.data())
    //       setUserInfo({ uid: userInfo.uid, name: userInfo.name, myBooks: [...userInfo.myBooks, doc.data() as Wordbook] })
    //     })
    //   })
    // })
  }, [user])

  React.useEffect(() => {
    loginObserve()
  }, [loginObserve])

  return null
}
