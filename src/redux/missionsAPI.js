import axios from 'axios';

const GET_MISSIONS = 'MISSIONS';
const missionsURL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, ...action.missionsArr];
    default:
      return state;
  }
};

export const getMissions = () => async (dispatch) => {
  const res = await axios.get(missionsURL);
  const resData = res.data;
  if (resData) {
    const missionsArr = [];
    resData.forEach((record) => {
      const missionObj = {
        id: record.mission_id,
        name: record.mission_name,
        desc: record.description,
      };
      missionsArr.push(missionObj);
    });
    dispatch({
      type: GET_MISSIONS,
      missionsArr,
    });
  }
};

export default reducer;
