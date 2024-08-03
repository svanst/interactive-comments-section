import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import MaxWidthWrapper from "./MaxWidthWrapper/MaxWidthWrapper";
import Button from "./Button/Button";
import {
  IconDelete,
  IconEdit,
  IconMinus,
  IconPlus,
  IconReply,
} from "./Icon/Icon";
import Rating from "./Rating/Rating";
import Comment from "./Comment/Comment";
import CommentList from "./CommentList/CommentList";

export default function App() {
  return (
    <main>
      <MaxWidthWrapper>
        <VisuallyHidden asChild>
          <h1>Interactive comments section</h1>
        </VisuallyHidden>
        <CommentList />
      </MaxWidthWrapper>
    </main>
  );
}
