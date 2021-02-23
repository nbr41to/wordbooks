import Link from 'next/link'
import { Login } from '../src/components/Login';
import { ModalWrapper } from '../src/components/Modal/Modal';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../src/components/atoms/Button';

export default function Home() {
  const [open, set] = React.useState(false)
  const get = async () => {
    const response = await fetch('http://localhost:3000/api/test-api', {
      method: 'post'
    })
    const data = await response.json()
    console.log(data)
  }
  get()

  return (
    <div>
      <h1>Wordbooks</h1>
      <Link href='/mypage'>go mypage!!</Link>
      <Login />
      <Button className='m-32' onClick={() => set(true)}>modal</Button>
      <ModalWrapper open={open} close={() => set(false)}>
        <Box className='p-32 m-32'>
          <div className='p-32'>
            modal!!
          </div>
        </Box>
      </ModalWrapper>
    </div>
  )
}

const Box = styled.div`
  background-color: #fff;
  width: 200px;
`
