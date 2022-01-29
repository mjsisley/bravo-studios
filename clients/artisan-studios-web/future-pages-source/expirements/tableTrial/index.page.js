import Head from "next/head";

import Header from "../0shared/Header";
import TableTrial from "./App";

const Home = () => {
  return (
    <>
      <Head>
        <title>Table Example</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <TableTrial />
    </>
  );
};

export default Home;
