import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase";

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    auth.onAuthStateChanged((changedUser) => {
      setUser(changedUser);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserContext;
export { UserProvider };