import styles from "./Rating.module.css";

import { useState } from "react";
import Button from "../Button/Button";
import { IconMinus, IconPlus } from "../Icon/Icon";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function Rating() {
  const [value, setValue] = useState(0);

  const increase = () => setValue(value + 1);
  const decrease = () => setValue(Math.max(value - 1, 0));

  return (
    <div className={`bg-neutral-400 ${styles.wrapper}`}>
      <Button
        aria-label="increase rating"
        variant="icon"
        color="primary-light"
        onClick={increase}
      >
        <IconPlus />
      </Button>
      <span className="clr-primary fw-bold">
        <VisuallyHidden>Rating</VisuallyHidden>
        {value}
      </span>
      <Button
        aria-label="decrease rating"
        variant="icon"
        color="primary-light"
        onClick={decrease}
      >
        <IconMinus />
      </Button>
    </div>
  );
}

export default Rating;
