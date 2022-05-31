const ChatsListReducer = (state, action) => {
  switch (action.type) {
    case "POST_CHATSLIST_START":
      return {
        chatsList: {},
        isFetching: true,
        error: false,
      };
    case "POST_CHATSLIST_SUCCES":
      return {
        chatsList: action.payload,
        isFetching: true,
        error: false,
      };
    case "POST_CHATSLIST_FAILURE":
      return {
        chatsList: {},
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default ChatsListReducer;
