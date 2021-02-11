import React from 'react'
import { Mylist } from '../src/Mylist'
import { firebase } from '../src/firebase'
import { useRecoilState } from 'recoil';
import { user } from '../src/recoil';
import { useRouter } from 'next/router';

// export const getStaticProps = async () => {
//   const props = { props: { uid: null } }
//   const user = firebase.auth().currentUser
//   if (!user) return props
//   props.props.uid = user.uid
//   return props
// }

const Mypage: React.FC<{ uid: string | null }> = (props) => {
  console.log(props)
  const router = useRouter()
  // React.useEffect(() => {
  //   if (!props.uid) router.push('/')
  // }, [])
  return (
    <div>
      <Mylist />
    </div>
  )
}

export default Mypage
