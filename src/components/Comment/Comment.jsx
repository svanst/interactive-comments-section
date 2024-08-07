import { useContext, useEffect, useRef, useState } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import CommentList from "../CommentList/CommentList";

import useIsCurrentUser from "../../hooks/UseIsCurrentUser";
import Avatar from "../Avatar/Avatar";
import CommentActions from "../CommentActions/CommentActions";
import CommentForm from "../CommentForm/CommentForm";
import Rating from "../Rating/Rating";
import styles from "./Comment.module.css";
import { modes } from "./modes";

function Comment({
  commentID,
  author,
  replyingTo,
  date,
  content,
  avatar,
  rating,
}) {
  const { getReplies } = useContext(CommentsContext);
  const isCurrentUser = useIsCurrentUser(author);

  const [mode, setMode] = useState(modes.read); // read | edit | reply | new
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef(null);
  useEffect(() => {
    const textarea = textareaRef.current;
    if (mode === modes.reply || mode === modes.edit) {
      textarea.focus();
    }
    if (mode === modes.edit) {
      // move cursor to the end of the text
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }
  }, [mode]);

  const changeMode = (mode) => {
    if (mode === modes.edit) {
      setTextareaValue(content);
    } else if (mode === modes.reply) {
      setTextareaValue("");
    } else if (mode === modes.read) {
      setTextareaValue(content);
    }
    setMode(mode);
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
          {isCurrentUser && <span className={styles.badge}>you</span>}
          <span>{date}</span>
        </div>
        {mode === modes.edit ? (
          <CommentForm
            mode={modes.edit}
            textareaValue={textareaValue}
            setTextareaValue={setTextareaValue}
            ref={textareaRef}
            setMode={setMode}
            commentID={commentID}
          />
        ) : (
          <p className={styles.content}>
            {replyingTo ? (
              <>
                <span className="fw-bold clr-primary">@{replyingTo} </span>
                {content}
              </>
            ) : (
              content
            )}
          </p>
        )}

        <Rating
          author={author}
          score={rating}
          commentID={commentID}
          className={styles.rating}
        />
        <CommentActions
          author={author}
          commentID={commentID}
          mode={mode}
          changeMode={changeMode}
        />
      </div>
      {mode === modes.reply && (
        <CommentForm
          textareaValue={textareaValue}
          setTextareaValue={setTextareaValue}
          ref={textareaRef}
          setMode={setMode}
          mode={modes.reply}
          commentID={commentID}
          className={styles.replyAnimation}
        />
      )}
      {replies?.length > 0 && (
        <div className={styles.replies}>
          <CommentList comments={replies} />
        </div>
      )}
    </article>
  );
}

export default Comment;
