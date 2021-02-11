import Link from 'next/link'
import { Login } from '../src/Login';

export default function Home() {
  return (
    <div>
      <h1>Wordbooks</h1>
      <Link href='/mypage'>go mypage!!</Link>
      <Login />
    </div>
  )
}
