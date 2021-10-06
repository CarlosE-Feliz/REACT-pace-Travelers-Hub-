import React from 'react';
import { useSelector } from 'react-redux';
import {
  NameRocket,
  Profile, RocketItems, Rockets, RocketsItem,
} from '../componentR/styles';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rock);
  return (
    <Profile>
      <div style={{ width: '50%' }}>
        My mission
      </div>
      <Rockets>
        <h3>My Rockets</h3>
        <RocketsItem>
          {rockets.map((item) => (item.reserved ? (
            <RocketItems>
              <NameRocket>{ item.name }</NameRocket>
            </RocketItems>
          ) : null))}
        </RocketsItem>
      </Rockets>
    </Profile>
  );
};

export default MyProfile;
