import { getApi, postApi } from "../Common/api";
import { SET_ROOMS } from "../Constants/Constants";

export const getRooms = () => dispatch => {
  getApi("url", "Get", data => dispatch(setRooms(data)));
};

export const confirmRoom = (id, useremail, sendNotification) => dispatch => {
  console.log(`Confirm booking for id ${id}`);
  postApi("url", data => {
    sendNotification(useremail);
  });
};

function setRooms(data) {
  return {
    type: SET_ROOMS,
    payload: data
  };
}
