import React from 'react'
import { firebase } from './firebase'
// import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { user } from './recoil/index';
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
        router.push('/mypage')
      })
      .catch(error => {
        alert(error.message);
      });
  }
  return (
    <div>
      <Button variant='outlined' onClick={() => signInWithGoogle()}>
        Google Account でログイン
      </Button>
    </div>
  )
}
