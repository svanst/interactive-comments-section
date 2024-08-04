import styles from "./Rating.module.css";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import Button from "../Button/Button";
import { IconMinus, IconPlus } from "../Icon/Icon";

function Rating({ className, commentID, score }) {
  const { increaseRating, decreaseRating } = useContext(CommentsContext);

  return (
    <div className={`bg-neutral-400 ${styles.wrapper} ${className}`}>
      <Button
        aria-label="increase rating"
        variant="icon"
        color="primary-light"
        onClick={() => increaseRating(commentID)}
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
        onClick={() => decreaseRating(commentID)}
      >
        <IconMinus />
      </Button>
    </div>
  );
}

export default Rating;
