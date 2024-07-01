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
  const [PointsToSave, setPointsToSave] = useState(localStorage.getItem("Bpnthr_pt_sv"));

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
    const { data: response } = await httpClient.get("user/get_user");
    setCurrentUser(response.user);
  };

  const onSavePointsLocally = (points) => {
    localStorage.setItem("Bpnthr_pt_sv", points);
  }

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
    localStorage.removeItem("Bpnthr_pt_sv");
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
      setPointsToSave,
      onSavePointsLocally
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
      setPointsToSave,
      onSavePointsLocally
    ]
  );

  return { authMethods };
}

