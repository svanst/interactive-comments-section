import styles from "./commentActions.module.css";

import Button from "../Button/Button";
import { IconDelete, IconEdit, IconReply } from "../Icon/Icon";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { useContext } from "react";
import { CommentsContext } from "../../contexts/commentsContext";
import { modes } from "../Comment/modes";
import {
  Modal,
  ModalContent,
  ModalTrigger,
  ModalClose,
  ModalTitle,
} from "../Modal/Modal";

function CommentActions({ author, commentID, mode, changeMode }) {
  const { onDeleteComment } = useContext(CommentsContext);
  const { currentUser } = useContext(CurrentUserContext);

  const isCurrentUser = author === currentUser.username;
  return (
    <div className={styles.actions}>
      {isCurrentUser ? (
        <>
          <Modal>
            <ModalTrigger asChild>
              <Button variant="ghost" color="danger">
                <IconDelete />
                Delete
              </Button>
            </ModalTrigger>
            <ModalContent>
              <ModalTitle asChild>
                <h2 className={`clr-neutral-700`}>Delete comment</h2>
              </ModalTitle>
              <p>
                Are you sure you want to delete this comment? This will remove
                the comment and can’t be undone.
              </p>
              <div className={styles.confirmationActions}>
                <ModalClose asChild>
                  <Button className={styles.btn} color="neutral">
                    No, cancel
                  </Button>
                </ModalClose>
                <Button
                  className={styles.btn}
                  color="danger"
                  onClick={() => onDeleteComment(commentID)}
                >
                  Yes, delete
                </Button>
              </div>
            </ModalContent>
          </Modal>

          <Button
            variant="ghost"
            onClick={() =>
              changeMode(mode === modes.read ? modes.edit : modes.read)
            }
          >
            <IconEdit />
            Edit
          </Button>
        </>
      ) : (
        <Button
          variant="ghost"
          onClick={() =>
            changeMode(mode === modes.read ? modes.reply : modes.read)
          }
        >
          <IconReply />
          Reply
        </Button>
      )}
    </div>
  );
}

export default CommentActions;
