import styles from "./Rating.module.css";

import { useState } from "react";
import Button from "../Button/Button";
import { IconMinus, IconPlus } from "../Icon/Icon";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function Rating({ className, rating, increaseRating, decreaseRating }) {
  return (
    <div className={`bg-neutral-400 ${styles.wrapper} ${className}`}>
      <Button
        aria-label="increase rating"
        variant="icon"
        color="primary-light"
        onClick={() => increaseRating(rating.id)}
      >
        <IconPlus />
      </Button>
      <span className="clr-primary fw-bold">
        <VisuallyHidden>Rating</VisuallyHidden>
        {rating.score}
      </span>
      <Button
        aria-label="decrease rating"
        variant="icon"
        color="primary-light"
        onClick={() => decreaseRating(rating.id)}
      >
        <IconMinus />
      </Button>
    </div>
  );
}

export default Rating;
