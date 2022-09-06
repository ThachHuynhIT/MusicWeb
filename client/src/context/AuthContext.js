import React, { createContext, useEffect, useState } from "react";
import * as UserService from "../service/userService";
export const AuthContext = createContext();

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    UserService.isAuthen().then((data) => {
      setUser(data.user);
      setAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <p>Loading....</p>
      ) : (
        <AuthContext.Provider value={{ user, setUser, setAuthenticated }}>
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
