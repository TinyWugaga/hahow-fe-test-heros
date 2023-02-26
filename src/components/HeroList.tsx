import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function HeroList({ children }: PropsWithChildren) {
  return <HeroListContainer>{children}</HeroListContainer>;
}

const HeroListContainer = styled.div`
  padding: 3rem 0px 4rem;

  display: flex;
  gap: 1rem;
`;
