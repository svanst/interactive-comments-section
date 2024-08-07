// useIsCurrentUser.js
import { useContext, useMemo } from "react";
import { CurrentUserContext } from "../contexts/currentUserContext";

const useIsCurrentUser = (author) => {
  const { currentUser } = useContext(CurrentUserContext);
  return author === currentUser.username;
};

export default useIsCurrentUser;
