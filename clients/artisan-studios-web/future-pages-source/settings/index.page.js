import Head from "next/head";
import styled from "styled-components";
import Header from "../0shared/Header";
import ThemeControl from "components/parts/controls/ThemeControl";

const Settings = () => {
  return (
    <>
      <Head>
        <title>Settings</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <h1>Settings</h1>
      <h2>Theme</h2>

      <hr />
      <ThemeControl />
    </>
  );
};

export default Settings;
