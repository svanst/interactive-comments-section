import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import CommentList from "./components/CommentList/CommentList";
import MaxWidthWrapper from "./components/MaxWidthWrapper/MaxWidthWrapper";

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
