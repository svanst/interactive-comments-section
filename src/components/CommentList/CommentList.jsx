import styles from "./CommentList.module.css";

import Comment from "../Comment/Comment";
import commentsJSON from "../../data.json";
import { useReducer } from "react";
import { actions, ratingsReducer } from "../../reducers/ratingsReducer";

const comments = commentsJSON.comments;

const initialRatings = comments.map(({ id, score }) => ({ id, score }));

function CommentList() {
  const [ratings, dispatch] = useReducer(ratingsReducer, initialRatings);

  // todo move to context?
  const increaseRating = (id) => dispatch({ type: actions.increase, id });
  const decreaseRating = (id) => dispatch({ type: actions.decrease, id });

  const getRating = (id) => ratings.find((rating) => rating.id === id);

  return (
    <ul className={styles.comments}>
      {comments.map(({ id, user, content, createdAt }) => (
        <li key={id}>
          {" "}
          <Comment
            author={user.username}
            content={content}
            date={createdAt}
            avatar={user.image}
            rating={getRating(id)}
            increaseRating={increaseRating}
            decreaseRating={decreaseRating}
          />
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
