// import { createGetInitialProps } from "@mantine/next";
import { ColorSchemeScript } from "@mantine/core";
import Document, { Head, Html, Main, NextScript } from "next/document";

// const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  // static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <ColorSchemeScript />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
