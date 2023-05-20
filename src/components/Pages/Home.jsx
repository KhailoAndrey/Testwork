// import { Link } from 'react-router-dom';
import { HomeTitle, TweetsLink, WrapperHomePage } from './Home.styled';
// import { useAuth } from 'redux/auth/selectors';

export default function Home() {
//   const { isLoggedIn } = useAuth();
  return (
    <WrapperHomePage>      
      <HomeTitle style={{ color: 'green' }}>
        To display tweets, select an option from the dropdown menu on the  
      </HomeTitle>
        <TweetsLink to="/tweets" >Tweets</TweetsLink>
    </WrapperHomePage>
  );
}
