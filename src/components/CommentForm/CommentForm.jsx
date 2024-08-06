import styles from "./commentForm.module.css";

import { forwardRef, useContext, useEffect, useRef } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import Button from "../Button/Button";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import Avatar from "../Avatar/Avatar";
import classNames from "classnames";
import { modes } from "../Comment/modes";

const CommentForm = forwardRef(
  (
    {
      type,
      textareaValue,
      setTextareaValue,
      mode,
      setMode,
      commentID,
      className,
    },
    ref
  ) => {
    const { onUpdateComment, onCreateComment, onReply } =
      useContext(CommentsContext);
    const { currentUser } = useContext(CurrentUserContext);

    useEffect(setTextareaHeight, [textareaValue, ref]);

    function setTextareaHeight() {
      // textarea's don't auto-grow, therefore update the height when the content changes
      if (ref.current) {
        ref.current.style.height = "auto";
        const scrollHeight = ref.current.scrollHeight;
        ref.current.style.height = `${scrollHeight}px`;
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
          throw new Error(`Unhandled type: ${type}`);
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
          placeholder={
            mode === modes.reply ? "Write a reply..." : "Add a comment..."
          }
          onInput={handleInput}
          className={styles.textarea}
          ref={ref}
          required
        />
        {renderButton()}
      </form>
    );
  }
);

CommentForm.displayName = "CommentForm";

export default CommentForm;
