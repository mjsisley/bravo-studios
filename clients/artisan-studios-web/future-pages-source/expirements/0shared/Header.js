import Link from "components/Link";
import ThemeControl from "components/parts/controls/ThemeControl";
import UserManagement from "components/parts/controls/UserManagement";
import Header from "components/parts/Header";

const linkList = [
  ["/expirements", "Home"],
  ["/expirements/apolloTrial", "Apollo Example"],
  ["/expirements/springTrial", "Spring Trial"],
  ["/expirements/threeTrial", "Three Trial"],
  ["/expirements/tableTrial", "Table Trial"],
  ["/expirements/dndTrial", "DnD Trial"],
  ["/expirements/rteTrial", "RTE Trial"],
  ["/expirements/misc", "Miscellaneous"],
  ["/expirements/post", "Posts"],
];

const Links = ({ linkList }) =>
  linkList.map((item) => (
    <Link activeClassName="active" href={item[0]}>
      <a>{item[1]}</a>
    </Link>
  ));

const HeaderComponent = ({ children }) => <Header bg="primary" color="secondary" flexDirection="horizontal">
  <Links linkList={linkList} />
  <UserManagement />
  <ThemeControl />
</Header>;

export default HeaderComponent;
