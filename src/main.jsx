import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./styles/reset.css";
import "./styles/root.css";
import "./styles/utilities.css";
import "./styles/style.css";
import { CommentsProvider } from "./contexts/commentsContext.jsx";

const root = createRoot(document.querySelector("#root"));

root.render(
  <CommentsProvider>
    <App />
  </CommentsProvider>
);
