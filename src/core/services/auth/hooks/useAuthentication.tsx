import { useState, useEffect } from "react";
import { authService, BroadcastMessage } from "../authService";
import { AUTH_BROADCAST_TYPE } from "../constants/authGlobals";

export const useAuthentication = () => {
  let [isAuthenticated, setIsAuthenticated] = useState(
    authService.authenticated()
  );

  useEffect(() => {
    const subscription = authService
      .listen()
      .subscribe((data: BroadcastMessage) => {
        switch (data.type) {
          case AUTH_BROADCAST_TYPE:
            setIsAuthenticated(data.payload);
            break;
          default:
            console.log("we received a message");
        }
      });
    return () => subscription?.unsubscribe();
  }, []);

  return isAuthenticated;
};
