import styles from "./Rating.module.css";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useContext, useState } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import Button from "../Button/Button";
import { IconMinus, IconPlus } from "../Icon/Icon";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import useIsCurrentUser from "../../hooks/UseIsCurrentUser";

function Rating({ className, commentID, score, author }) {
  const { onIncreaseRating, onDecreaseRating } = useContext(CommentsContext);
  const isCurrentUser = useIsCurrentUser(author);
  const [initialRating] = useState(score);

  const handleIncrease = () => {
    if (score === initialRating + 1) {
      alert(`You already upvoted this comment.`);
      return;
    }
    onIncreaseRating(commentID);
  };

  const handleDecrease = () => {
    if (score === initialRating - 1) {
      alert(`You already downvoted this comment.`);
      return;
    }
    onDecreaseRating(commentID);
  };

  return (
    <div className={`bg-neutral-400 ${styles.wrapper} ${className}`}>
      <Button
        aria-label="increase rating by 1"
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
        aria-label="decrease rating by 1"
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
