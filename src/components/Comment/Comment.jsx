import { useContext, useState } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import CommentList from "../CommentList/CommentList";

import Rating from "../Rating/Rating";
import styles from "./Comment.module.css";
import ButtonRow from "../ButtonRow/ButtonRow";
import CommentForm from "../CommentForm/CommentForm";
import Avatar from "../Avatar/Avatar";

function Comment({ commentID, author, date, content, avatar, rating }) {
  const { getReplies } = useContext(CommentsContext);
  const [editMode, setEditMode] = useState(false);
  const [textareaValue, setTextareaValue] = useState(content);

  const toggleEditMode = () => {
    const newEditMode = !editMode;
    if (newEditMode) {
      setTextareaValue(content); // if the user is in the process of editing but closes edit mode by clicking on the edit button, reset the textarea value to the original content
    }
    setEditMode(newEditMode);
  };

  const replies = getReplies(commentID);

  return (
    <article>
      <div className={`bg-neutral-100 ${styles.comment}`}>
        <div className={styles.attribution}>
          <Avatar avatar={avatar} author={author} />
          <address className="fw-bold clr-neutral-700  font-style-normal">
            {author}
          </address>
          <time dateTime="">{date}</time>
        </div>
        {editMode ? (
          <CommentForm
            type="edit"
            textareaValue={textareaValue}
            setTextareaValue={setTextareaValue}
            setEditMode={setEditMode}
            commentID={commentID}
          />
        ) : (
          <p className={styles.content}>{content}</p>
        )}

        <Rating
          score={rating}
          commentID={commentID}
          className={styles.rating}
        />
        <ButtonRow
          author={author}
          commentID={commentID}
          toggleEditMode={toggleEditMode}
        />
      </div>

      {replies.length > 0 && (
        <div className={styles.replies}>
          <CommentList comments={replies} />
        </div>
      )}
    </article>
  );
}

export default Comment;
