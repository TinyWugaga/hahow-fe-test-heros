import { PropsWithChildren } from "react";
import Head from "next/head";
import styled from "styled-components";

export default function BasicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main>{children}</Main>;
    </>
  );
}

const Main = styled.main`
  min-height: 100dvh;
  min-height: 100vh;
`;
