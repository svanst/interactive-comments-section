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

export default function App() {
  return (
    <main>
      <MaxWidthWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <VisuallyHidden asChild>
            <h1>Interactive comments section</h1>
          </VisuallyHidden>
          <Button variant="ghost">
            <IconReply /> Reply
          </Button>
          <Button color="primary-light" variant="icon">
            <IconPlus />
          </Button>
          <Button color="primary-light" variant="icon">
            <IconMinus />
          </Button>
          <Button color="danger" variant="ghost">
            <IconDelete /> Delete
          </Button>
          <Button color="primary" variant="fill">
            Send
          </Button>
          <Button color="neutral" variant="fill">
            No, cancel
          </Button>
          <Button color="danger" variant="fill">
            Yes, delete
          </Button>

          <Button color="primary-light" variant="fill">
            Yes, delete
          </Button>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

const styles = {
  test: "test",
};
