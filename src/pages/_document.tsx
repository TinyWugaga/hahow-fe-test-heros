import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* metadata */}
        <meta property="og:title" content="Hahow Heros!" key="title" />
        <meta
          property="og:description"
          content="Hahow FE Test Project"
          key="description"
        />

        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
