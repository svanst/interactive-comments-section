import styles from "./ButtonRow.module.css";

import Button from "../Button/Button";
import { IconDelete, IconEdit, IconReply } from "../Icon/Icon";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { useContext } from "react";

function ButtonRow({ author }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isCurrentUser = author === currentUser.username;
  console.log({ author, isCurrentUser });
  return (
    <div className={styles.actions}>
      {isCurrentUser ? (
        <>
          <Button variant="ghost" color="danger">
            <IconDelete />
            Delete
          </Button>
          <Button variant="ghost">
            <IconEdit />
            Edit
          </Button>
        </>
      ) : (
        <Button variant="ghost">
          <IconReply />
          Reply
        </Button>
      )}
    </div>
  );
}

export default ButtonRow;
