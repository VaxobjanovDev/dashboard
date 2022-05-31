import { useReducer } from "react";
import { createContext } from "react";
import ChatListReducer from "./ChatListReducer";

const initialState = {
  messageList:{},
  isFetching: false,
  error: false,
};

export const MessageList = createContext(initialState);

export const MessageListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MessageListReducer, initialState);

  return (
    <MessageListContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MessageListContext.Provider>
  );
};
