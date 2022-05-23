import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [role, setRole] = useState("USER");

  // const login = useCallback((jwtToken, id, role) => {
  //   setToken(jwtToken);
  //   setUserId(id);
  //   setRole(role);
  //   localStorage.setItem(
  //     "userData",
  //     JSON.stringify({ userId: id, token: jwtToken, role })
  //   );
  // }, []);

  // const logout = () => {
  //   setToken(null);
  //   setUserId(null);
  //   localStorage.removeItem("userData");
  // };

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("userData"));
  //   if (data && data.token) {
  //     login(data.token, data.userId, data.role);
  //   }
  //   setIsReady(true);
  // }, [login]);

  return {  token, userId, isReady, role };
};
