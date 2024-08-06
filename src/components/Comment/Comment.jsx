import { useContext, useState } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import CommentList from "../CommentList/CommentList";

import Avatar from "../Avatar/Avatar";
import ButtonRow from "../ButtonRow/ButtonRow";
import CommentForm from "../CommentForm/CommentForm";
import Rating from "../Rating/Rating";
import styles from "./Comment.module.css";
import { modes } from "./modes";

function Comment({ commentID, author, date, content, avatar, rating }) {
  const { getReplies } = useContext(CommentsContext);
  const [mode, setMode] = useState(modes.read); // read | edit | reply
  const [textareaValue, setTextareaValue] = useState("");

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
          <time dateTime="">{date}</time>
        </div>
        {mode === modes.edit ? (
          <CommentForm
            type="edit"
            textareaValue={textareaValue}
            setTextareaValue={setTextareaValue}
            setMode={setMode}
            commentID={commentID}
          />
        ) : (
          <p className={styles.content}>{content}</p>
        )}

        <Rating
          author={author}
          score={rating}
          commentID={commentID}
          className={styles.rating}
        />
        <ButtonRow
          author={author}
          commentID={commentID}
          mode={mode}
          changeMode={changeMode}
        />
      </div>
      {mode === modes.reply && (
        <CommentForm
          type="reply"
          textareaValue={textareaValue}
          setTextareaValue={setTextareaValue}
          setMode={setMode}
          commentID={commentID}
        />
      )}
      {replies?.length > 0 && (
        <div className={styles.replies}>
          <CommentList comments={replies} />
        </div>
      )}

      {/* </div> */}
    </article>
  );
}

export default Comment;
