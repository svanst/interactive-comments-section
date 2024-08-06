import styles from "./commentForm.module.css";

import { useContext, useEffect, useRef } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import Button from "../Button/Button";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import Avatar from "../Avatar/Avatar";
import classNames from "classnames";
import { modes } from "../Comment/modes";

function CommentForm({
  type,
  textareaValue,
  setTextareaValue,
  setMode,
  commentID,
  className,
}) {
  const { onUpdateComment, onCreateComment, onReply } =
    useContext(CommentsContext);
  const { currentUser } = useContext(CurrentUserContext);

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

    if (textareaValue.match(/^\s*$/)) {
      alert("Please provide some text");
      return;
    }

    switch (type) {
      case "new":
        onCreateComment(textareaValue);
        setTextareaValue("");
        return;
      case "edit":
        onUpdateComment(commentID, textareaValue);
        break;
      case "reply":
        onReply(commentID, textareaValue);
        break;
      default:
      // do something
    }

    setMode(modes.read);
  }

  const handleInput = (e) => {
    const textarea = e.currentTarget;
    setTextareaValue(textarea.value);
  };

  const renderButton = () => {
    switch (type) {
      case "new":
        return <Button type="submit">Send</Button>;
      case "edit":
        return <Button type="submit">Update</Button>;
      case "reply":
        return <Button type="submit">Reply</Button>;
      default:
        return <Button type="submit">Submit</Button>;
    }
  };

  const combinedClasses = classNames(
    className,
    styles.form,
    styles[`form--${type}-comment`]
  );

  return (
    <form onSubmit={handleSubmit} className={combinedClasses}>
      {(type === "reply" || type === "new") && (
        <Avatar avatar={currentUser.image} author={currentUser.author} />
      )}
      <textarea
        value={textareaValue}
        placeholder="Add a comment..."
        onInput={handleInput}
        className={styles.textarea}
        ref={textareaRef}
        required
      />
      {renderButton()}
    </form>
  );
}

export default CommentForm;
