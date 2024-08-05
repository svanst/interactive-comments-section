import { useContext, useState } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import { getImage } from "../../helpers/image.helpers";
import CommentList from "../CommentList/CommentList";

import Rating from "../Rating/Rating";
import styles from "./Comment.module.css";
import ButtonRow from "../ButtonRow/ButtonRow";
import CommentForm from "../CommentForm/CommentForm";

const getAvatarSrc = (path) => path.replace("./images/avatars/", "");

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

  const avatarSrc = {
    png: getAvatarSrc(avatar.png),
    webp: getAvatarSrc(avatar.webp),
  };

  return (
    <article>
      <div className={`bg-neutral-100 ${styles.comment}`}>
        <div className={styles.attribution}>
          <picture>
            <source srcSet={getImage(avatarSrc.webp)} type="image/webp" />
            <img src={getImage(avatarSrc.png)} alt={`${author}'s avatar`} />
          </picture>
          <address className="fw-bold clr-neutral-700  font-style-normal">
            {author}
          </address>
          <time dateTime="">{date}</time>
        </div>
        {editMode ? (
          <CommentForm
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
