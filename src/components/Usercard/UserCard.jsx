import React, { useState, useEffect } from 'react';
import './UserCard.css';

const UserCard = () => {
  const initialFollowers = 100500;
  const [followers, setFollowers] = useState(initialFollowers);
  const [following, setFollowing] = useState(false);

  const handleFollowClick = () => {
    if (following) {
      setFollowers(followers - 1);
    } else {
      setFollowers(followers + 1);
    }
    setFollowing(!following);
  };

  useEffect(() => {
    const isFollowing = localStorage.getItem('isFollowing') === 'true';
    const savedFollowers = localStorage.getItem('followers');
    if (isFollowing !== null && savedFollowers !== null) {
      setFollowing(isFollowing);
      setFollowers(parseInt(savedFollowers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isFollowing', following.toString());
    localStorage.setItem('followers', followers.toString());
  }, [following, followers]);

  return (
    <div className="user-card">
      <h2>User Card</h2>
      <p>Followers: {followers.toLocaleString()}</p>
      <button
        onClick={handleFollowClick}
        className={following ? 'following' : ''}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default UserCard;
