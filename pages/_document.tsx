import ServerStyleSheets from "@material-ui/styles/ServerStyleSheets/ServerStyleSheets";
import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import theme from "styles/theme";

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" href="/static/images/favicon/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            href="/static/images/favicon/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/images/favicon/favicon-32x32.png"
            sizes="32x32"
          />
          <meta charSet="utf-8" />

          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
