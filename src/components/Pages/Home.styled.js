import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const WrapperHomePage = styled.div`
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 50vw; 
margin-left: auto;
margin-right: auto;
`;

export const HomeTitle = styled.p`
  max-width: 600px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 550px) {
    font-size: 26px;
  }
`;

export const TweetsLink = styled(Link)`
color: purple;
  text-decoration: none;
  font-size: 32px;
  font-weight: 600;
  margin-left: 50px;
  &:hover{
    scale: 1.3;
    color: blue;
}
`