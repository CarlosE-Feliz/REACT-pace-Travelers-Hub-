import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({
  missionID,
  missionName,
  missionDesc,
  hasJoined,
  joinFunc,
}) => (
  <tr className="mission-item">
    <td className="mission-title"><h4>{missionName}</h4></td>
    <td className="mission-desc"><p>{missionDesc}</p></td>
    <td className="mission-status">
      {!hasJoined ? <h4 className="not-a-member">NOT A MEMBER</h4>
        : <h4 className="active-member">Active Member</h4>}
    </td>
    <td className="mission-button">
      {!hasJoined ? <button className="join-button" onClick={joinFunc} id={missionID} type="button">Join Mission</button>
        : <button className="leave-button" onClick={joinFunc} id={missionID} type="button">Leave Mission</button>}
    </td>
  </tr>
);

Mission.propTypes = {
  missionID: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
  hasJoined: PropTypes.bool.isRequired,
  joinFunc: PropTypes.func.isRequired,
};

export default Mission;
