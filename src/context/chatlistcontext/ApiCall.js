import axios from "axios";
import { chatsListFailure, chatsListStart, chatsListSucces } from "./ChatsListActions";

export const messageList = async (dispatch, chatsList) => {
  dispatch(chatsListStart());
  try {
    const res = await axios.post("/chats/list", chatsList, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")).payload.token,
      },
    });
    dispatch(chatsListSucces(res.data));
  } catch (e) {
    dispatch(chatsListFailure());
  }
};

