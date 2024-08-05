// import styles from "./Avatar.module.css";
import { getImage } from "../../helpers/image.helpers";

const getAvatarSrc = (path) => path.replace("./images/avatars/", "");

function Avatar({ avatar, author }) {
  const avatarSrc = {
    png: getAvatarSrc(avatar.png),
    webp: getAvatarSrc(avatar.webp),
  };
  return (
    <picture>
      <source srcSet={getImage(avatarSrc.webp)} type="image/webp" />
      <img src={getImage(avatarSrc.png)} alt={`${author}'s avatar`} />
    </picture>
  );
}

export default Avatar;
