// import React from "react";
import { useContext } from "react";
// import NoSSR from "react-no-ssr";
import { AuthContext } from "utils/context";

const LogoutComp = () => {
  const { setAuth } = useContext(AuthContext);
  return (
    <button
      onClick={(e) => {
        setAuth(null);
      }}
    >
      Log out
    </button>
  );
};

const Comp = () => <LogoutComp />;
export default Comp 
