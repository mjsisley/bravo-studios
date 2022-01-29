import Head from "next/head";
import styled from "styled-components";
import Header from "../0shared/Header";
import Heading from 'components/Heading'

const Chat = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Heading>Chat</Heading>
    </>
  );
};

export default Chat;
