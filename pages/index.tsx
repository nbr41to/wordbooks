import { LoginEmail } from 'src/components/LoginEmail';
import { LoginGoogle } from 'src/components/LoginGoogle';
import { UserInfo } from '../src/components/UserInfo';
import { SignUpEmail } from '../src/components/SignupEmail';

const Home: React.FC = () => {


  return (
    <div>
      <h1>Wordbooks</h1>
      <UserInfo />
      <LoginGoogle />
      <LoginEmail />
      <SignUpEmail />
    </div>
  );
};

export default Home;
