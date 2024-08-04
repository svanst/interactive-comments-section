import React, { createContext, useReducer } from "react";
import { actions, commentsReducer } from "../reducers/commentsReducer";

import commentsJSON from "../data/data.json";

const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
  const [comments, dispatch] = useReducer(
    commentsReducer,
    commentsJSON.comments
  );

  const increaseRating = (id) => dispatch({ type: actions.increase, id });
  const decreaseRating = (id) => dispatch({ type: actions.decrease, id });

  return (
    <CommentsContext.Provider
      value={{ comments, increaseRating, decreaseRating }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { CommentsContext, CommentsProvider };
