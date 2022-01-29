import Head from "next/head";
import styled from 'styled-components'
import Example from "./example";

import Header from "../../0shared/Header";
import Link from "components/Link";

const Page = styled.div`
  display: grid;

  grid-template-areas:
    "header header"
    "side content";

  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 0px 30px;

  height: 100vh;
`;

const Container = styled.div`
  grid-area: side;
  background-color: red;
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => (
  <Container>
    <Link href="/expirements/rteTrial" key="/rteTrial">
      <a>Editor</a>
    </Link>
    <Link href="/expirements/allNotes" key="/allNotes">
      <a>All Notes</a>
    </Link>
    <Link href="/settings" key="/settings">
      <a>Settings</a>
    </Link>
  </Container>
);


const Home = () => {
  return (
    <>
      <Head>
        <title>Rich Text Editor Example</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Page>
        <Header />
        <Sidebar />
        <Example />
      </Page>
    </>
  );
};

export default Home;
