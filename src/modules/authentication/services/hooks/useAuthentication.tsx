import { useState, useEffect } from "react";
import { authService, BroadcastMessage } from "../authService";
import { authConfig } from "../constants/authConfig";

export const useAuthentication = () => {
  let [isAuthenticated, setIsAuthenticated] = useState(!!authService.getMe());

  useEffect(() => {
    const subscription = authService
      .messagesOfType(authConfig.AUTH_BROADCAST_TYPE)
      .subscribe((data: BroadcastMessage) => {
        setIsAuthenticated(data.payload);
      });
    return () => subscription?.unsubscribe();
  }, []);

  return isAuthenticated;
};
