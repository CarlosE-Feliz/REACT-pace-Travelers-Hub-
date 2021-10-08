import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission } from '../redux/missionsAPI';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const joined = (e) => {
    dispatch(joinMission(missions, e.target.id));
  };

  return (
    <div className="missions-list">
      <table className="missions-table">
        <thead>
          <tr>
            <th><h4 className="mission-table-heading">Missions</h4></th>
            <th className="mission-description"><h4 className="mission-table-heading">Descriptions</h4></th>
            <th><h4 className="mission-table-heading">Status</h4></th>
            <th><h4 className="mission-table-heading"> </h4></th>
          </tr>
        </thead>
        <tbody>
          {missions.map((item) => (
            <Mission
              key={item.id}
              missionID={item.id}
              missionName={item.name}
              missionDesc={item.desc}
              hasJoined={item.joined}
              joinFunc={joined}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
