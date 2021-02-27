import React from 'react';
import { Mylist } from '../src/components/Mylist';
import { SubscribeFirebase } from '../src/recoil/SubscribeFirebase';

const Mypage: React.FC = () => {
  return (
    <div>
      <SubscribeFirebase>
        <Mylist />
      </SubscribeFirebase>
    </div>
  );
};

export default Mypage;
