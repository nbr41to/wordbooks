import React from 'react'
import { firebase } from '../firebase'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { User, user, Wordbook } from '../recoil/index';
import { TextField } from '@material-ui/core';
import { Button } from './atoms/Button';
import { ReactComponent as Google } from '../assets/google.svg'
import styled from 'styled-components';
type LoginProps = {

}

export const Login: React.FC<LoginProps> = () => {
  const [userInfo, setUserInfo] = useRecoilState(user)
  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const getMyBooks = () => {
    const user = firebase.auth().currentUser
    if (user) {
      const uid = user.uid
      firebase.firestore().collection('wordbooks').where('usedBy', 'array-contains', uid).onSnapshot((snapshot) => {
        const myBooks = snapshot.docs.map(doc => doc.data()) as Wordbook[]
        setUserInfo({ ...userInfo, myBooks })
      })
    }
  }
  const signInWithGoogle = () => {

    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(user => {
        alert("success : " + user.user.displayName + "さんでログインしました");
        const uid = user.user.uid
        firebase.firestore().collection('user').doc(uid).get().then(doc => {
          setUserInfo(doc.data() as User)
        }).catch(() => {
          firebase.firestore().collection('user').doc(uid).set({
            uid, name: user.user.displayName
          })
        })
        getMyBooks()
        router.push('/mypage')
      })
      .catch(error => {
        alert(error.message);
      });
  }
  const loginEmail = () => {

  }
  const signupEmail = () => {

  }

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) router.push('/mypage')
    });
  }, [])
  return (
    <div className="box fccc">
      <Button className="m-16" onClick={() => signInWithGoogle()}>
        <StyledGoogleIcon />Google Account でログイン
      </Button>
      <form className="fccc">
        <TextField className="m-16" label='Email' fullWidth variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <TextField className="m-16" label='Password' fullWidth variant="outlined" type='password' onChange={(e) => setPassword(e.target.value)} />
        <Button className="m-16 w100" bgColor="green" onClick={loginEmail}>メールアドレスでログイン</Button>
      </form>
      <Button className="m-16" bgColor="orange" onClick={() => signupEmail}>
        メールアドレスでアカウントを作成
      </Button>
    </div>
  )
}

const StyledGoogleIcon = styled(Google)`
  width: 30px;
  height: 30px;
  margin-right: 12px;
`
