import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function BasicLayout({ children }: PropsWithChildren) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  min-height: 100dvh;
  min-height: 100vh;
`;
