import axios from 'axios';

const GET_MISSIONS = 'MISSIONS';
const missionsURL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, action.missionsArr];
    default:
      return state;
  }
};

export const getMissions = () => (dispatch) => {
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

export default reducer;
