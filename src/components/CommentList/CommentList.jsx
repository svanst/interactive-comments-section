import Comment from "../Comment/Comment";

import styles from "./CommentList.module.css";

function CommentList({ comments }) {
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
