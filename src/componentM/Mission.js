import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({
  missionName,
  missionDesc,
}) => (
  <tr className="mission-item">
    <td className="mission-title"><h4>{missionName}</h4></td>
    <td className="mission-desc"><p>{missionDesc}</p></td>
    <td className="mission-status"><h4 className="not-a-member">NOT A MEMBER</h4></td>
    <td className="mission-button"><button className="join-button" type="button">Join Mission</button></td>
  </tr>
);

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
};

export default Mission;
