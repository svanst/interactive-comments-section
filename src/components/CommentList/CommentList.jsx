import styles from "./CommentList.module.css";

import Comment from "../Comment/Comment";

import { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";

function CommentList() {
  const { comments } = useContext(CommentsContext);

  return (
    <ul className={styles.comments}>
      {comments.map(({ id, user, content, createdAt, score }) => (
        <li key={id}>
          {" "}
          <Comment
            commentID={id}
            author={user.username}
            content={content}
            date={createdAt}
            avatar={user.image}
            rating={score}
          />
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
