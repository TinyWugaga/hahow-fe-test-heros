import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Layout from "@/components/BasicLayout";
import GlobalStyle from "@/styles/globalStyles";
import { theme } from "@/styles/theme";

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: {
    pageTitle: string;
  };
}) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout pageTitle={Component.pageTitle || ""}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
