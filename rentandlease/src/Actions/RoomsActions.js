import { getApi, postApi } from "../Common/api";
import { SET_ROOMS } from "../Constants/Constants";

export const getRooms = () => dispatch => {
  getApi(
    //"http://localhost:3010/rooms/",
    "http://149.165.157.127:3010/rooms/",
    "Get",
    data => dispatch(setRooms(data)),
    err => console.log(err)
  );
};

export const confirmRoom = (id, useremail, sendNotification) => dispatch => {
  console.log(`Confirm booking for id ${id}`);
  // postApi(
  //   "url",
  //   data => {
  //     sendNotification(useremail);
  //   },
  //   err => {
  //     console.log(`error in confirm booking ${err}`);
  //   }
  // );
  sendNotification(useremail);
};

function setRooms(data) {
  return {
    type: SET_ROOMS,
    payload: data
  };
}
