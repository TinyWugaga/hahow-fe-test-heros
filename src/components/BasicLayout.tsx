import { PropsWithChildren } from "react";
import Head from "next/head";
import styled from "styled-components";

export default function BasicLayout({
  pageTitle,
  children,
}: PropsWithChildren & {
  pageTitle: string;
}) {
  const title = `Hahow Heros! ${pageTitle ? ` | ${pageTitle}` : ""}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  height: 100%;
`;
