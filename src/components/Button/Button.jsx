import React, { forwardRef } from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = forwardRef(
  (
    { children, className, variant = "fill", color = "primary", ...rest },
    ref
  ) => {
    const combinedClasses = classNames(
      styles.btn,
      styles[`btn--${variant}`],
      styles[`btn--${color}`],
      className
    );

    return (
      <button ref={ref} className={combinedClasses} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
