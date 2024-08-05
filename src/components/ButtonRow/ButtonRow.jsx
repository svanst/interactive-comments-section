import styles from "./ButtonRow.module.css";

import Button from "../Button/Button";
import { IconDelete, IconEdit, IconReply } from "../Icon/Icon";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { useContext } from "react";
import { CommentsContext } from "../../contexts/commentsContext";

function ButtonRow({ author, commentID, toggleEditMode }) {
  const { deleteComment } = useContext(CommentsContext);
  const { currentUser } = useContext(CurrentUserContext);

  const isCurrentUser = author === currentUser.username;
  return (
    <div className={styles.actions}>
      {isCurrentUser ? (
        <>
          <Button
            variant="ghost"
            color="danger"
            onClick={() => deleteComment(commentID)}
          >
            <IconDelete />
            Delete
          </Button>
          <Button variant="ghost" onClick={toggleEditMode}>
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
