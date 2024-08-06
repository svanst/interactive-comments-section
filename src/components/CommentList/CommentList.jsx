import Comment from "../Comment/Comment";

import styles from "./CommentList.module.css";

function CommentList({ comments, className = "" }) {
  return (
    <ul className={`${className} ${styles.comments}`}>
      {comments.map(({ id, user, content, createdAt, score, replyingTo }) => (
        <li key={id}>
          {" "}
          <Comment
            commentID={id}
            author={user.username}
            replyingTo={replyingTo}
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
