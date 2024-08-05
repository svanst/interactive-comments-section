import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import CommentList from "./components/CommentList/CommentList";
import MaxWidthWrapper from "./components/MaxWidthWrapper/MaxWidthWrapper";
import styles from "./app.module.css";

import { useContext, useState } from "react";
import { CommentsContext } from "./contexts/commentsContext";
import CommentForm from "./components/CommentForm/CommentForm";

export default function App() {
  const { comments } = useContext(CommentsContext);
  const [newComment, setNewComment] = useState("");

  return (
    <main>
      <MaxWidthWrapper>
        <VisuallyHidden asChild>
          <h1>Interactive comments section</h1>
        </VisuallyHidden>
        <CommentList comments={comments} className={styles.commentList} />
        <CommentForm
          type="new"
          textareaValue={newComment}
          setTextareaValue={setNewComment}
        />
      </MaxWidthWrapper>
    </main>
  );
}
