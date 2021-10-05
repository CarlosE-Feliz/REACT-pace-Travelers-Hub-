/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import axios from 'axios';

const GET_ROCKETS = 'ROCKETS';
const url = 'https:/api.spacexdata.com/v3/rockets';
const initialRockets = [];
const reducer = (state = initialRockets, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.newData];

    default:
      return state;
  }
};

export const getRock = () => {
  return (dispatch) => {
    axios.get(url)
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

export default reducer;