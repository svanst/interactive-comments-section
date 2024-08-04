import { getImage } from "../../helpers/image.helpers";
import Button from "../Button/Button";
import { IconReply } from "../Icon/Icon";
import Rating from "../Rating/Rating";
import styles from "./Comment.module.css";

const getAvatarSrc = (path) => path.replace("./images/avatars/", "");

function Comment({ commentID, author, date, content, avatar, rating }) {
  const avatarSrc = {
    png: getAvatarSrc(avatar.png),
    webp: getAvatarSrc(avatar.webp),
  };

  return (
    <article className={`bg-neutral-100 ${styles.comment}`}>
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
      <Rating score={rating} commentID={commentID} className={styles.rating} />
      <div className={styles.actions}>
        {/* <Button variant="ghost" color="danger">
          <IconDelete />
          Delete
        </Button>
        <Button variant="ghost">
          <IconEdit />
          Edit
        </Button> */}
        <Button variant="ghost">
          <IconReply />
          Reply
        </Button>
      </div>
    </article>
  );
}

export default Comment;
