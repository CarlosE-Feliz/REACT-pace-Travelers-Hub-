import React from 'react';
import Mission from './Mission';

const SomethingM = () => (
  <div className="missions-list">
    <table className="missions-table">
      <tr>
        <th><h3 className="mission-title-heading">Missions</h3></th>
        <th><h3>Descriptions</h3></th>
        <th><h3>Status</h3></th>
        <th> </th>
      </tr>
      <Mission />
    </table>
  </div>
);

export default SomethingM;
