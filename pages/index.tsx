import Link from 'next/link';
import { Login } from '../src/components/Login';
import { ModalWrapper } from '../src/components/Modal/Modal';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../src/components/atoms/Button';

const Home: React.FC = () => {
  const [open, set] = React.useState(false);
  const get1 = async () => {
    const response = await fetch('http://localhost:3000/api/test-api', {
      method: 'post'
    });
    const data = await response.json();
    console.log(data);
  };
  get1();

  const get2 = async () => {
    // await fetch('https://jsonplaceholder.typicode.com/posts')
    // await fetch('https://jsonplaceholder.typicode.com/user')
    await fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  get2();

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
  );
};
export default Home;

const Box = styled.div`
  background-color: #fff;
  width: 200px;
`;
