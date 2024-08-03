import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import MaxWidthWrapper from "./MaxWidthWrapper/MaxWidthWrapper";

export default function App() {
  return (
    <main>
      <MaxWidthWrapper>
        <VisuallyHidden asChild>
          <h1>Interactive comments section</h1>
        </VisuallyHidden>
        <h1>Hello there</h1>
      </MaxWidthWrapper>
    </main>
  );
}
