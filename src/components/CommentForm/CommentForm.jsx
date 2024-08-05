import styles from "./commentForm.module.css";

import { useContext, useEffect, useRef } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import Button from "../Button/Button";

function CommentForm({
  textareaValue,
  setTextareaValue,
  setEditMode,
  commentID,
}) {
  const { updateComment } = useContext(CommentsContext);

  const textareaRef = useRef(null);

  useEffect(setTextareaHeight, [textareaValue]);

  function setTextareaHeight() {
    // textarea's don't auto-grow, therefore update the height when the content changes
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(false);
    updateComment(commentID, textareaValue);
  }

  const handleInput = (e) => {
    const textarea = e.currentTarget;
    setTextareaValue(textarea.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        value={textareaValue}
        onInput={handleInput}
        className={styles.textarea}
        ref={textareaRef}
      />
      <Button type="submit" className={styles.update}>
        Update
      </Button>
    </form>
  );
}

export default CommentForm;
