import { Modal } from "components/Modal";
import Login from "./Login";
import Logout from "./Logout";
// import NoSSR from "react-no-ssr";
import { useContext } from "react";
import { AuthContext } from "utils/context";
import { ThemeSelectContext } from "utils/context";

const UserManagement = () => {
  const { token } = useContext(AuthContext);
  return token ? <Logout /> : <Modal name="Login" contentComponent={Login} />;
};

const Comp = () => (
  // <NoSSR>
    <UserManagement />
  // </NoSSR>
);


export default Comp;

