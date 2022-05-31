import axios from "axios";
import { chatListFailure, chatListStart, chatListSucces } from "./ChatListActions";

export const messageList = async (dispatch, messageList) => {
  dispatch(chatListStart());
  try {
    const res = await axios.post("/message/list", messageList, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")).payload.token,
      },
    });
    dispatch(chatListSucces(res.data));
  } catch (e) {
    dispatch(chatListFailure());
  }
};

