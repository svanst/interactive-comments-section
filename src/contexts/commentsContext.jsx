import { createContext, useReducer } from "react";
import { actions, commentsReducer } from "../reducers/commentsReducer";

import commentsJSON from "../data/data.json";
import { getComment } from "../helpers/comment.helpers";

const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
  const [comments, dispatch] = useReducer(
    commentsReducer,
    commentsJSON.comments
  );

  const increaseRating = (id) =>
    dispatch({ type: actions.increase, comments, id });
  const decreaseRating = (id) =>
    dispatch({ type: actions.decrease, comments, id });

  const getReplies = (id) => {
    const comment = getComment(comments, id);
    return comment.replies || [];
  };

  return (
    <CommentsContext.Provider
      value={{ comments, increaseRating, decreaseRating, getReplies }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { CommentsContext, CommentsProvider };
