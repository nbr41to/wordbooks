import React from 'react'
import { firebase } from './firebase'
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { User, user } from './recoil/index';
import { Button } from '@material-ui/core';

type LoginProps = {

}

export const Login: React.FC<LoginProps> = () => {
  const setUser = useSetRecoilState(user)
  const router = useRouter()
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(user => {
        alert("success : " + user.user.displayName + "さんでログインしました");
        const uid = user.user.uid
        firebase.firestore().collection('user').doc(uid).get().then(doc => {
          setUser(doc.data() as User)
        }).catch(() => {
          firebase.firestore().collection('user').doc(uid).set({
            uid, name: user.user.displayName
          })
        })
        router.push('/mypage')
      })
      .catch(error => {
        alert(error.message);
      });
  }
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) router.push('/mypage')
    });
  }, [])
  return (
    <div>
      <Button variant='outlined' onClick={() => signInWithGoogle()}>
        Google Account でログイン
      </Button>
    </div>
  )
}
