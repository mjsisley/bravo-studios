import Link from "components/Link";
import ThemeControl from "components/parts/controls/ThemeControl";
import UserManagement from "components/parts/controls/UserManagement";
import Header from "components/parts/Header";
import { Flex } from "rebass/styled-components";

const linkList = [
  ["/", "Home"],
  ["/settings", "Settings"],
];

const Links = ({ linkList }) =>
  linkList.map((item) => (
    <Link activeClassName="active" href={item[0]} key={item[0]}>
      <a>{item[1]}</a>
    </Link>
  ));

const Comp = ({ children }) => (
  <Header
    bg="primary"
    color="secondary"
    flexDirection="horizontal"
    justifyContent="space-between"
    alignItems="center"
  >
    <Flex flexDirection="horizontal">
      <Links linkList={linkList} />
    </Flex>
    <Flex flexDirection="horizontal">
      <UserManagement />
      <ThemeControl />
    </Flex>
  </Header>
);

export default Comp