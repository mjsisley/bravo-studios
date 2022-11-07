import React, { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/react-hooks";
// import decode from "jwt-decode";
// import Cookies from "js-cookie";
// import { refreshSocket } from "util/apollo";
import { AuthContext } from "../utils/context";
import { ThemeSelectContext } from "../utils/context";
import { ThemeProvider } from "styled-components";
import themes from "../themes";

const ThemeSelectProvider = ({ initialTheme, children }) => {
  const [theme, setThemeName] = useState(
    initialTheme ||
      (typeof window != "undefined" && localStorage.getItem("theme"))
  );

  const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setThemeName(theme);
  };

  return (
    <ThemeSelectContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeSelectContext.Provider>
  );
};

const StateProvider = ({
  initialToken,
  initialUserId,
  initialUserName,
  socket,
  children,
}) => {
  const client = useApolloClient();
  const [token, setToken] = useState(
    initialToken ||
      (typeof window != "undefined" && localStorage.getItem("token"))
  );
  const [userId, setUserId] = useState(
    initialUserId ||
      (typeof window != "undefined" && localStorage.getItem("userId"))
  );

  const [userName, setUserName] = useState(
    initialUserName ||
      (typeof window != "undefined" && localStorage.getItem("userName"))
  );

  //   const [chatState, setChatState] = useState("default");

  // If the token changed (i.e. the user logged in
  // or out), clear the Apollo store and refresh the
  // websocket connection.
  useEffect(() => {
    if (!token) client.clearStore();
    // if (socket) refreshSocket(socket);
  }, [client, token]);

  const setAuth = (data) => {
    if (data) {
      // const currentToken = decode(data)
      const { id, name, token } = data;
      //   Cookies.set("token", token);
      //   Cookies.set("userId", id);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", id);
      localStorage.setItem("userName", name);
      setToken(token);
      setUserId(id);
      setUserName(name);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      setToken(null);
      setUserId(null);
      setUserName(null);
    }
  };

  return (
    <AuthContext.Provider value={{ token, userId, userName, setAuth }}>
      {/* <ChatContext.Provider value={{ chatState, setChatState }}> */}
      <ThemeSelectProvider initialTheme="theme1">
        {children}
      </ThemeSelectProvider>
      {/* </ChatContext.Provider> */}
    </AuthContext.Provider>
  );
};

export default StateProvider;
