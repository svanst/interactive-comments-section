import { createContext, useContext, useReducer } from "react";
import { actions, commentsReducer } from "../reducers/commentsReducer";
import { getComments } from "../helpers/data.helpers";
import { getRepliesForComment } from "../helpers/comment.helpers";
import { CurrentUserContext } from "./currentUserContext";

const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
  const [comments, dispatch] = useReducer(
    commentsReducer,
    undefined,
    getComments
  );

  const { currentUser: user } = useContext(CurrentUserContext);

  const onIncreaseRating = (id) =>
    dispatch({ type: actions.increase, comments, id });
  const onDecreaseRating = (id) =>
    dispatch({ type: actions.decrease, comments, id });
  const onUpdateComment = (id, content) =>
    dispatch({ type: actions.update, comments, content, id });
  const onCreateComment = (content) =>
    dispatch({ type: actions.create, comments, content, user });
  const onReply = (parentCommentID, content) =>
    dispatch({ type: actions.reply, comments, content, user, parentCommentID });
  const deleteComment = (id) =>
    dispatch({ type: actions.delete, comments, id });

  const getReplies = (id) => getRepliesForComment(comments, id);

  return (
    <CommentsContext.Provider
      value={{
        comments,
        onIncreaseRating,
        onDecreaseRating,
        deleteComment,
        onUpdateComment,
        onCreateComment,
        onReply,
        getReplies,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { CommentsContext, CommentsProvider };
