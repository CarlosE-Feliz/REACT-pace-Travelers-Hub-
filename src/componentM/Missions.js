import React from 'react';
import Mission from './Mission';

const SomethingM = () => (
  <div className="missions-list">
    <table className="missions-table">
      <tr>
        <th><h4 className="mission-table-heading">Missions</h4></th>
        <th className="mission-description"><h4 className="mission-table-heading">Descriptions</h4></th>
        <th><h4 className="mission-table-heading">Status</h4></th>
        <th><h4 className="mission-table-heading"> </h4></th>
      </tr>
      <Mission />
    </table>
  </div>
);

export default SomethingM;
