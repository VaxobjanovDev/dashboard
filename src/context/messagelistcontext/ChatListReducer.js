const ChatListReducer = (state, action) => {
  switch (action.type) {
    case "POST_MESSAGELIST_START":
      return {
        messageList: {},
        isFetching: true,
        error: false,
      };
    case "POST_MESSAGELIST_SUCCES":
      return {
        messageList: action.payload,
        isFetching: true,
        error: false,
      };
    case "POST_MESSAGELIST_FAILURE":
      return {
        messageList: {},
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default ChatListReducer;
