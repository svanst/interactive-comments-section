import { createContext, useReducer } from "react";
import { actions, commentsReducer } from "../reducers/commentsReducer";
import { getComments } from "../helpers/data.helpers";
import { getRepliesForComment } from "../helpers/comment.helpers";

const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
  const [comments, dispatch] = useReducer(
    commentsReducer,
    undefined,
    getComments
  );

  const increaseRating = (id) =>
    dispatch({ type: actions.increase, comments, id });
  const decreaseRating = (id) =>
    dispatch({ type: actions.decrease, comments, id });
  const updateComment = (id, content) =>
    dispatch({ type: actions.update, comments, content, id });

  const deleteComment = (id) =>
    dispatch({ type: actions.delete, comments, id });

  const getReplies = (id) => getRepliesForComment(comments, id);

  return (
    <CommentsContext.Provider
      value={{
        comments,
        increaseRating,
        decreaseRating,
        deleteComment,
        updateComment,
        getReplies,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { CommentsContext, CommentsProvider };
