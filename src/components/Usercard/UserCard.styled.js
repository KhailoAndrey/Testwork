import { Link } from 'react-router-dom';
import styled from 'styled-components'

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

export const Header = styled.div`
height: 50px;
text-align: left;
  margin-bottom: 10px;
  
`
export const StyledLink = styled(Link)`
  color: green;
  text-decoration: none;
  font-size: 24px;
  &:hover{
    scale: 1.3;
    color: blue;
}
`;

export const UserCardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const UserBox = styled.div`
position: relative;
width: 380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;

`

export const Logo = styled.div`
width: 76px;
height: 22px;
/* background-image: url('../../images/Logo.png'); */
opacity: 0.3;
position: absolute;
top: 20px;
left: 20px;
`

export const Picture = styled.div`
/* background: url('../../images/picture.png'); */
width: 308px;
height: 168px;
position: absolute;
top: 28px;
left: 36px;
`
export const Img = styled.img`
/* position: absolute; */
`

export const Line = styled.div`
width: 380px;
height: 8px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), 
inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
position: absolute;
top: 214px;
`
export const AvatarBox = styled.div`
position: absolute;
width: 80px;
height: 80px;
left: 150px;
top: 178px;
border-radius: 85.9232px;
background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 
inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
display: flex;
align-items: center;
justify-content: center;
`
export const Tweets = styled.p`
margin: 0;
position: absolute;
width: 380px;
height: 24px;
top: 284px;
text-align: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`
export const Followers = styled.p`
margin: 0;
position: absolute;
width: 380px;
height: 24px;
top: 324px;
text-align: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`
export const ButtonFollow = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;
position: absolute;
width: 196px;
height: 50px;
left: 92px;
top: 374px;
background: ${props => props.following  ? '#5CD3A8' : '#EBD8FF'};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`
export const TextButton = styled.p`
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
flex: none;
order: 0;
flex-grow: 0;
`
export const ButtonBack = styled.button`
width: 100px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
cursor: pointer;
&:hover{
    background-color: aquamarine;
        scale: 1.1;

}
`

export const ButtonLoadMore = styled.button`
/* width: 100px; */
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
cursor: pointer;
&:hover{
    background-color: aquamarine;
    scale: 1.1;
}
`
export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
gap: 20px;

`
