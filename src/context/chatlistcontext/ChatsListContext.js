import { useReducer } from "react";
import { createContext } from "react";
import ChatsListReducer from "./ChatsListReducer";

const initialState = {
  chatsList:{},
  isFetching: false,
  error: false,
};

export const ChatsList = createContext(initialState);

export const ChatsListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ChatsListReducer, initialState);

  return (
    <ChatsListContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ChatsListContext.Provider>
  );
};
