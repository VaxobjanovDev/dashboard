export const chatsListStart = () => ({
  type: "POST_CHATSLIST_START",
});

export const chatsListSucces = (movies) => ({
  type: "POST_CHATSLIST_SUCCES",
  payload: chatList,
});

export const chatsListFailure = () => ({
  type: "POST_CHATSLIST_FAILURE",
});
