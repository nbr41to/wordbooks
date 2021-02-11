import React from 'react'
import { firebase } from './firebase'
// import firebase from 'firebase/app';

type LoginProps = {

}

export const Login: React.FC<LoginProps> = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(user => {
        alert("success : " + user.user.displayName + "さんでログインしました");
      })
      .catch(error => {
        alert(error.message);
      });
  }
  return (
    <div>
      <h2>Google Account でログイン</h2>
      <button onClick={() => signInWithGoogle()}>
        Google Account でログイン
      </button>
    </div>
  )
}
