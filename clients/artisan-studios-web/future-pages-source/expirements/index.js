import Head from "next/head";
import styled from "styled-components";

import Header from "./0shared/Header";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
