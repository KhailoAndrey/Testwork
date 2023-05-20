import { HomeTitle, TweetsLink, WrapperHomePage } from './Home.styled';

export default function Home() {
  return (
    <WrapperHomePage>      
      <HomeTitle style={{ color: 'green' }}>
        To display tweets, select an option from the dropdown menu on the  
      </HomeTitle>
        <TweetsLink to="/tweets" >Tweets</TweetsLink>
    </WrapperHomePage>
  );
}
