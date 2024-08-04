import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import CommentList from "./components/CommentList/CommentList";
import MaxWidthWrapper from "./components/MaxWidthWrapper/MaxWidthWrapper";

import { useContext } from "react";
import { CommentsContext } from "./contexts/commentsContext";

export default function App() {
  const { comments } = useContext(CommentsContext);
  return (
    <main>
      <MaxWidthWrapper>
        <VisuallyHidden asChild>
          <h1>Interactive comments section</h1>
        </VisuallyHidden>
        <CommentList comments={comments} />
      </MaxWidthWrapper>
    </main>
  );
}
