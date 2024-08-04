import { useContext } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import { getImage } from "../../helpers/image.helpers";
import CommentList from "../CommentList/CommentList";

import Rating from "../Rating/Rating";
import styles from "./Comment.module.css";
import ButtonRow from "../ButtonRow/ButtonRow";

const getAvatarSrc = (path) => path.replace("./images/avatars/", "");

function Comment({ commentID, author, date, content, avatar, rating }) {
  const { getReplies } = useContext(CommentsContext);

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
        <p className={styles.content}>{content}</p>
        <Rating
          score={rating}
          commentID={commentID}
          className={styles.rating}
        />
        <ButtonRow author={author} />
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
