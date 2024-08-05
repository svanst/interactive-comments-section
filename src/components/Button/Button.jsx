import classNames from "classnames";
import styles from "./Button.module.css";

function Button({
  children,
  className,
  variant = "fill",
  color = "primary",
  ...rest
}) {
  const combinedClasses = classNames(
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${color}`],
    className
  );
  return (
    <button className={combinedClasses} {...rest}>
      {children}
    </button>
  );
}

export default Button;
