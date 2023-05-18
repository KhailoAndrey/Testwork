import { Link } from 'react-router-dom';
import { HomeTitle, WrapperHomePage } from './Home.styled';
// import { useAuth } from 'redux/auth/selectors';

export default function Home() {
//   const { isLoggedIn } = useAuth();
  return (
    <WrapperHomePage>
      {/* {isLoggedIn ? ( */}
      <Link to='/tweets' >Tweets</Link>
      <HomeTitle style={{ color: 'green' }}>
        To display tweets, select an option from the dropdown menu.
      </HomeTitle>
      {/* ) : (
        <HomeTitle style={{ color: 'green' }}>
          To access the list of contacts, you must log in with your credentials
          or register
        </HomeTitle>
      )} */}
    </WrapperHomePage>
  );
}
