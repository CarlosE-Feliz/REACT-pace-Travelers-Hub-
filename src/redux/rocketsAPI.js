/* eslint-disable eqeqeq */

import axios from 'axios';

const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const rocketsURL = 'https:/api.spacexdata.com/v3/rockets';
const initialRockets = [];
const reducer = (state = initialRockets, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.newData];
    case RESERVE_ROCKET:
      return action.newState;

    default:
      return state;
  }
};

export const rocketReseve = (currentState, id) => (dispatch) => {
  const newState = currentState.map((rocket) => {
    if (rocket.id != id) {
      return rocket;
    }
    return { ...rocket, reserved: !rocket.reserved };
  });
  dispatch({
    type: RESERVE_ROCKET,
    newState,
  });
};

export const getRock = () => (dispatch) => {
  axios.get(rocketsURL)
    .then((res) => {
      const allData = res.data;
      const newData = [];
      allData.forEach((element) => {
        const item = {
          id: element.id,
          name: element.rocket_name,
          img: element.flickr_images[0],
          desc: element.description,
          reserved: false,
        };
        newData.push(item);
      });
      dispatch({
        type: GET_ROCKETS,
        newData,
      });
    });
};

// id
// rocket_name
// rocket_type
// flickr_images [0]

export default reducer;
