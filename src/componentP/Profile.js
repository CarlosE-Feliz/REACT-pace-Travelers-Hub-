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
        {
            missions.filter(({ joined }) => joined).map(({ name, id }) => (
              <>
                <div key={id} className="joined-mission-item">
                  <h4 className="joined-mission-title">{name}</h4>
                </div>
              </>
            ))
          }
      </div>
      <Rockets>
        <h3>My Rockets</h3>
        <RocketsItem>
          {
            rockets.filter(({ reserved }) => reserved).map(({ name, id }) => (
              <>
                <RocketItems key={id}>
                  <NameRocket key={id}>{ name }</NameRocket>
                </RocketItems>
              </>
            ))
          }
        </RocketsItem>
      </Rockets>
    </Profile>
  );
};

export default MyProfile;
