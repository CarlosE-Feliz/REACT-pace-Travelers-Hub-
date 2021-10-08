import React from 'react';
import { useSelector } from 'react-redux';
import {
  NameRocket,
  Profile, RocketItems, Rockets, RocketsItem,
} from '../componentR/styles';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rock);
  const missions = useSelector((state) => state.missions);
  return (
    <Profile>
      <div className="joined-missions">
        <h3>My Missions</h3>
        {missions.map((record) => (record.joined ? (
          <div key={record.id} className="joined-mission-item">
            <h4 className="joined-mission-title">{record.name}</h4>
          </div>
        ) : null))}
      </div>
      <Rockets>
        <h3>My Rockets</h3>
        <RocketsItem>
          {rockets.map((item) => (item.reserved ? (
            <RocketItems key={item.id}>
              <NameRocket key={item.id}>{ item.name }</NameRocket>
            </RocketItems>
          ) : null))}
        </RocketsItem>
      </Rockets>
    </Profile>
  );
};

export default MyProfile;
