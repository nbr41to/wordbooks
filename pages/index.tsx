import { LoginEmail } from 'src/components/LoginEmail';
import { LoginGoogle } from 'src/components/LoginGoogle';
import { UserInfo } from '../src/components/UserInfo';
import { SignUpEmail } from '../src/components/SignupEmail';

const Home: React.FC = () => {


  return (
    <div>
      <UserInfo />
      <LoginGoogle />
      <LoginEmail />
      <SignUpEmail />
    </div>
  );
};

export default Home;
