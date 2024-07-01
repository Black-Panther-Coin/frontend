import { useCallback, useEffect, useMemo, useState } from "react";
import constate from "constate";
import httpClient from "../httpClient/httpClient";

export const [LoginProvider, useAuthentication] = constate(
  useLogin,
  value => value.authMethods
);

function useLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token_key_Bpnthr") !== null);
  const [currentUser, setCurrentUser] = useState("");
  const [PointsToSave, setPointsToSave] = useState(0);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("token_key_Bpnthr") !== null);

    if (!isAuthenticated) {
      // JICKS: This should take the user to the login page
      // window.location.href = "/login";
    } else {
      if (!currentUser) {
        const getCurrentUserAsync = async () => {
          await getCurrentUser();
        };

        getCurrentUserAsync();
      }
    }
  }, [isAuthenticated]);

  const getCurrentUser = async () => {
    const { data: response } = await httpClient.get("http://localhost:9080/api/user/get_user");
    setCurrentUser(response.user);
  };

  const ensureLogin = useCallback(async () => {
    if (localStorage.getItem("token_key_Bpnthr") === null) {
      // JICKS: This should take the user back to login page
      window.location.href = "/";
    } else {
      await getCurrentUser();
    }
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem("token_key_Bpnthr");
    localStorage.removeItem("expiresIn");
  };

  const onLogout = () => {
    clearLocalStorage();
    setCurrentUser("");
  };

  const authMethods = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated, 
      ensureLogin,
      currentUser,
      setCurrentUser,
      getCurrentUser,
      clearLocalStorage,
      onLogout,
      PointsToSave,
      setPointsToSave
    }),
    [
      isAuthenticated,
      setIsAuthenticated,
      ensureLogin,
      currentUser,
      setCurrentUser,
      getCurrentUser,
      clearLocalStorage,
      onLogout,
      PointsToSave,
      setPointsToSave
    ]
  );

  return { authMethods };
}

