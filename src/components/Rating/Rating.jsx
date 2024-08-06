import styles from "./Rating.module.css";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useContext, useState } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import Button from "../Button/Button";
import { IconMinus, IconPlus } from "../Icon/Icon";
import { CurrentUserContext } from "../../contexts/currentUserContext";

function Rating({ className, commentID, score, author }) {
  const { onIncreaseRating, onDecreaseRating } = useContext(CommentsContext);
  const { currentUser } = useContext(CurrentUserContext);
  const [initialRating] = useState(score);

  const isCurrentUser = author === currentUser.username;
  console.log(isCurrentUser);

  const handleIncrease = () => {
    if (score === initialRating + 1) return;
    onIncreaseRating(commentID);
  };

  const handleDecrease = () => {
    if (score === initialRating - 1) return;
    onDecreaseRating(commentID);
  };

  return (
    <div className={`bg-neutral-400 ${styles.wrapper} ${className}`}>
      <Button
        aria-label="increase rating"
        variant="icon"
        color="primary-light"
        onClick={() => handleIncrease()}
        disabled={isCurrentUser}
      >
        <IconPlus />
      </Button>
      <span className="clr-primary fw-bold">
        <VisuallyHidden>Rating</VisuallyHidden>
        {score}
      </span>
      <Button
        aria-label="decrease rating"
        variant="icon"
        color="primary-light"
        onClick={() => handleDecrease()}
        disabled={isCurrentUser}
      >
        <IconMinus />
      </Button>
    </div>
  );
}

export default Rating;
