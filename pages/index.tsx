import Link from 'next/link'
import { Login } from '../src/Login';
import { ModalWrapper } from '../src/components/Modal/Modal';
import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

export default function Home() {
  const [open, set] = React.useState(false)
  return (
    <div>
      <h1>Wordbooks</h1>
      <Link href='/mypage'>go mypage!!</Link>
      <Login />
      <Button onClick={() => set(true)}>modal</Button>
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
