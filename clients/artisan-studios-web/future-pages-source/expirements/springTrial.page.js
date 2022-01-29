import Head from "next/head";
import Header from "../0shared/Header";
import Background from "components/Background";

const Home = () => {
  return (
    <>
      <Head>
        <title>React Spring Trial</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <Background />
    </>
  );
};

export default Home;
