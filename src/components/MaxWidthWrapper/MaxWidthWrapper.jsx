import styles from "./maxWidthWrapper.module.css";

function MaxWidthWrapper({ width, children }) {
  return (
    <div className={styles.container} style={{ "--width": width }}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
