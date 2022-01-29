import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";
import StateProvider from "../lib/StateProvider";
// import withApolloClient from "../lib/with-apollo-client";
import { create } from "../lib/init-apollo";
import GlobalStyles from '../themes/reset'

const apolloClient = create();

class MyApp extends App {
  //   componentDidCatch(error, errorInfo) {
  //     console.log("CUSTOM ERROR HANDLING", error);
  //     // This is needed to render errors correctly in development / production
  //     super.componentDidCatch(error, errorInfo);
  //   }

  render() {
    // const { Component, pageProps, apolloClient } = this.props;
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <StateProvider>
          <>
            <GlobalStyles />
            <Component {...pageProps} />
          </>
        </StateProvider>
      </ApolloProvider>
    );
  }
}

// export default withApolloClient(MyApp);
export default MyApp;
