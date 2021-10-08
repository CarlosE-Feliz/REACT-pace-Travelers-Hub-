import axios from 'axios';

const GET_MISSIONS = 'MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const missionsURL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, ...action.missionsArr];
    case JOIN_MISSION:
      return action.updatedState;

    default:
      return state;
  }
};

export const joinMission = (currentState, missionID) => (dispatch) => {
  const updatedState = currentState.map((mission) => {
    if (mission.id !== missionID) {
      return mission;
    }
    return { ...mission, joined: !mission.joined };
  });
  dispatch({
    type: JOIN_MISSION,
    updatedState,
  });
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
        joined: false,
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
