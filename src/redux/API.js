/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import axios from 'axios';

const GET_ROCKETS = 'ROCKETS';
const GET_MISSIONS = 'MISSIONS';
const rocketsURL = 'https:/api.spacexdata.com/v3/rockets';
const missionsURL = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  rockets: [],
  missions: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return {
        ...state,
        rockets: action.newData,
      };

    case GET_MISSIONS:
      return {
        ...state,
        missions: action.missionArr,
      };
    default:
      return state;
  }
};

export const getRock = () => {
  return (dispatch) => {
    axios.get(rocketsURL)
      .then((res) => {
        const allData = res.data;
        const newData = [];
        allData.forEach((element) => {
          const item = {
            id: element.id,
            name: element.rocket_name,
            type: element.rocket_type,
            img: element.flickr_images[0],
            desc: element.description,
          };
          newData.push(item);
        });
        dispatch({
          type: GET_ROCKETS,
          newData,
        });
      });
  };
};

// id
// rocket_name
// rocket_type
// flickr_images [0]

export const getMissions = () => {
  return (dispatch) => {
    axios.get(missionsURL)
      .then((res) => {
        const resData = res.data;
        const missionArr = [];
        resData.forEach((record) => {
          const missionObj = {
            id: record.mission_id,
            name: record.mission_name,
            desc: record.description,
          };
          missionArr.push(missionObj);
        });
        dispatch({
          type: GET_MISSIONS,
          missionArr,
        });
      });
  };
};

export default reducer;
