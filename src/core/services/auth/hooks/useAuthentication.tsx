import { useState, useEffect } from "react";
import { authService, BroadcastMessage } from "../authService";
import { AUTH_BROADCAST_TYPE } from "../constants/authGlobals";

export const useAuthentication = () => {
  let [isAuthenticated, setIsAuthenticated] = useState(!!authService.getMe());

  useEffect(() => {
    const subscription = authService
      .messagesOfType(AUTH_BROADCAST_TYPE)
      .subscribe((data: BroadcastMessage) => {
        console.log(data);

        setIsAuthenticated(data.payload);
      });
    return () => subscription?.unsubscribe();
  }, []);

  return isAuthenticated;
};
