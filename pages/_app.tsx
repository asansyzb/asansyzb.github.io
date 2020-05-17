import App from "next/app";
import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "styles/theme";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("components/Layout"));

interface Props {
  Component: any;
  store: any;
  pageProps: any;
}

class AppWrapper extends App<Props> {
  static async getInitialProps({ Component, ctx }: any) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

//makeStore function that returns a new store for every request

//withRedux wrapper that passes the store to the App Component
export default AppWrapper;
