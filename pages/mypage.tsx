import React from 'react'
import { Mylist } from '../src/components/Mylist'
import { useRouter } from 'next/router';
import { SubscribeFirebase } from '../src/recoil/SubscribeFirebase';

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
      <SubscribeFirebase>
        <Mylist />
      </SubscribeFirebase>
    </div>
  )
}

export default Mypage
