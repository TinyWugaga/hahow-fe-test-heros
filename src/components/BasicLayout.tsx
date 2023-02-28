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
  position: relative;
  margin: auto;
  padding: 0 calc((100% - 80rem) / 2);
  width: min(100%, 80rem);
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
