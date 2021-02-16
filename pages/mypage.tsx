import React from 'react'
import { Mylist } from '../src/components/Mylist'
import { useRouter } from 'next/router';
import { SubscribeFirebase } from '../src/recoil/SubscribeFirebase';
import { Wordbook } from '../src/recoil';
import { firebase } from '../src/firebase'

export const getStaticProps = async () => {
  const props = { myBooks: null }
  const user = firebase.auth().currentUser
  console.log(user)
  if (user) {
    console.log('getStaticPropsでget')
    const uid = user.uid
    await firebase.firestore().collection('wordbooks').where('usedBy', 'array-contains', uid).onSnapshot((snapshot) => {
      props.myBooks = snapshot.docs.map(doc => doc.data()) as Wordbook[]
    })
  }
  return { props }
}

const Mypage: React.FC<{ uid: string | null }> = (props) => {
  console.log(props)
  const router = useRouter()
  // React.useEffect(() => {
  //   if (!props.uid) router.push('/')
  // }, [])
  return (
    <div>
      <SubscribeFirebase>
        <Mylist {...props} />
      </SubscribeFirebase>
    </div>
  )
}

export default Mypage
