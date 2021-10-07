import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMissions } from '../redux/missionsAPI';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const loadMissionsAction = bindActionCreators(getMissions, dispatch);

  useEffect(() => {
    loadMissionsAction();
  }, []);

  return (
    <div className="missions-list">
      <table className="missions-table">
        <tr>
          <th><h4 className="mission-table-heading">Missions</h4></th>
          <th className="mission-description"><h4 className="mission-table-heading">Descriptions</h4></th>
          <th><h4 className="mission-table-heading">Status</h4></th>
          <th><h4 className="mission-table-heading"> </h4></th>
        </tr>
        {missions.map((item) => (
          <Mission
            key={item.id}
            missionName={item.name}
            missionDesc={item.desc}
          />
        ))}
      </table>
    </div>
  );
};

export default Missions;
