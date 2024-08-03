import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

import "./global-styles/reset.css";
import "./global-styles/root.css";
import "./global-styles/utilities.css";
import "./global-styles/style.css";

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
