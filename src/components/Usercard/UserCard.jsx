import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../images/Logo.png';
import pic from '../../images/picture.png';

import {
  AvatarBox,
  ButtonBack,
  ButtonContainer,
  ButtonFollow,
  ButtonLoadMore,
  Container,
  Followers,
  Header,
  Img,
  Line,
  Logo,
  Picture,
  StyledLink,
  TextButton,
  Tweets,
  UserBox,
  UserCardContainer,
} from './UserCard.styled';
import { fetchgetUsers } from 'components/Redux/option';
import { updateUsers } from 'components/Fetch/updateUsers';

const UserCard = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [followingStatus, setFollowingStatus] = useState({});
//   const [selectedOption, setSelectedOption] = useState('all');
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   const handleOptionChange = event => {
//     setSelectedOption(event.target.value);

//     let filteredUsers = users;
//     if (event.target.value === 'follow') {
//       filteredUsers = filteredUsers.filter(user => !followingStatus[user.id]);
//     } else if (event.target.value === 'followings') {
//       filteredUsers = filteredUsers.filter(user => followingStatus[user.id]);
//     }
//     setFilteredUsers(filteredUsers);
//   };
  
  const loadMoreCards = () => {
    setCurrentIndex(prevIndex => prevIndex + 3);
  };

  const goBack = () => {
    setCurrentIndex(prevIndex => prevIndex - 3);
  };

  useEffect(() => {
    dispatch(fetchgetUsers()).then(response => {
      const fetchedUsers = response.payload;
      setUsers(fetchedUsers);
    });
  }, [dispatch]);

  useEffect(() => {
    const endIndex = currentIndex + 3;
    setDisplayedUsers(users.slice(currentIndex, endIndex));
      setHasMore(endIndex < users.length);
  }, [currentIndex, users]);

  useEffect(() => {
    const storedStatus = {};
    users.forEach(user => {
      const storedFollowingStatus = localStorage.getItem(
        `followingStatus_${user.id}`
      );
      if (storedFollowingStatus !== null) {
        storedStatus[user.id] = storedFollowingStatus === 'true';
      }
    });
    setFollowingStatus(storedStatus);
  }, [users]);

//   const handleClick = useCallback(
//     async (event, userId, following) => {
//       const updatedUsers = users.map(user => {
//         if (user.id === userId) {
//           const updatedFollowers = following
//             ? user.followers - 1
//             : user.followers + 1;

//           setUsers(prevUsers => {
//             return prevUsers.map(prevUser => {
//               if (prevUser.id === userId) {
//                 return {
//                   ...prevUser,
//                   following: !prevUser.following,
//                   followers: updatedFollowers,
//                 };
//               }
//               return prevUser;
//             });
//           });

//           setFollowingStatus(prevStatus => ({
//             ...prevStatus,
//             [userId]: !prevStatus[userId],
//           }));

//           localStorage.setItem(
//             `followingStatus_${userId}`,
//             (!following).toString()
//           );

//           updateUsers(userId, updatedFollowers)
//             .then(response => {
//               console.log('User updated successfully:', response);
//             })
//             .catch(error => {
//               console.error('Error updating user:', error);
//             });
//         }
//         return user;
//       });
//       setUsers(updatedUsers);
//     },
//     [users]
//   );

    const handleClick = useCallback(
      async (event, userId, following) => {
        const updatedUsers = users.map(user => {
          if (user.id === userId) {
            const updatedFollowers = following
              ? user.followers - 1
              : user.followers + 1;
            updateUsers(user.id, updatedFollowers)
              .then(response => {
                setUsers(prevUsers => {
                  return prevUsers.map(prevUser => {
                    if (prevUser.id === userId) {
                      return {
                        ...prevUser,
                        following: !prevUser.following,
                        followers: updatedFollowers,
                      };
                    }
                    return prevUser;
                  });
                });
                setFollowingStatus(prevStatus => ({
                  ...prevStatus,
                  [userId]: !prevStatus[userId],
                }));
                localStorage.setItem(
                  `followingStatus_${userId}`,
                  (!following).toString()
                );
              })
              .catch(error => {
                console.error('Error updating user:', error);
              });
          }
          return user;
        });
        setUsers(updatedUsers);
      },
      [users]
    );

  return (
    <>
      <Container>
        <Header>
          <StyledLink to="/">Go Home</StyledLink>
        </Header>
        {/* <div>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="all">Show All</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
          </select>
        </div> */}
        <UserCardContainer>
          {displayedUsers.map(user => (
            <UserBox key={user.id}>
              <Logo>
                <Img src={`${logo}`} alt="logo" />
              </Logo>
              <Picture>
                <Img src={`${pic}`} alt="card_picture" />
              </Picture>
              <Line></Line>
              <AvatarBox>
                <img
                  src={user.avatar}
                  alt="user_photo"
                  style={{
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                  }}
                />
              </AvatarBox>
              <Tweets>{user.tweets} tweets</Tweets>
              <Followers>
                {user.followers.toLocaleString('en-US')} followers
              </Followers>
              <ButtonFollow
                following={followingStatus[user.id]}
                onClick={event =>
                  handleClick(event, user.id, followingStatus[user.id])
                }
              >
                <TextButton>
                  {followingStatus[user.id] ? 'Following' : 'Follow'}
                </TextButton>
              </ButtonFollow>
              <img src="../../images/picture.png" alt="" />
            </UserBox>
          ))}
        </UserCardContainer>
        <ButtonContainer>
          {currentIndex > 0 && <ButtonBack onClick={goBack}>Back</ButtonBack>}
          {hasMore && (
            <ButtonLoadMore onClick={loadMoreCards}>Load More</ButtonLoadMore>
          )}
        </ButtonContainer>
      </Container>
    </>
  );
};

export default UserCard;
