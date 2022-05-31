export const chatListStart = () => ({
  type: "POST_MESSAGELIST_START",
});

export const chatListSucces = (movies) => ({
  type: "POST_MESSAGELIST_SUCCES",
  payload: messageList,
});

export const chatListFailure = () => ({
  type: "POST_MESSAGELIST_FAILURE",
});
