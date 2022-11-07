import Router from "next/router";
import { Flex } from "rebass/styled-components";
import Link from "components/Link";
import styled from "styled-components";
import { darken } from "polished";

const Header = styled(Flex)`
  grid-area: header;
  a {
    text-decoration: none;
    padding: 10px;
    display: block;
  }
  a:hover {
    text-decoration: underline;
    // color: ${(props) => darken(0.2, props.theme.colors.secondary)};
  }
  .active {
    text-decoration: underline;
    color: green;
  }
  // border-bottom: ${(props) => props.theme.colors.accent} solid 5px;
`;

const Links = ({ linkList }) =>
  linkList.map((item) => (
    <Link activeClassName="active" href={item[0]} key={item[0]}>
      <a>{item[1]}</a>
    </Link>
  ));

const Comp = ({ children, ...props }) => (
  <Header bg="primary" color="secondary" flexDirection="horizontal" {...props}>
    {children}
  </Header>
);


export default Comp;