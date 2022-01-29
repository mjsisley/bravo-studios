import Head from "next/head";

import Header from "../0shared/Header";
import Submit from "components/Submit";
import PostList from "components/PostList";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <Head>
        <title>Apollo Example</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Menu />
      {/* <Submit /> */}
      {/* <PostList /> */}
    </>
  );
};

export default Home;
