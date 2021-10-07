import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

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
              missionName={item.name}
              missionDesc={item.desc}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
