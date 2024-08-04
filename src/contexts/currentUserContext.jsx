import { createContext, useState } from "react";
import { getCurrentUser } from "../helpers/data.helpers";

const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const [currentUser] = useState(getCurrentUser);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserContext, CurrentUserProvider };
