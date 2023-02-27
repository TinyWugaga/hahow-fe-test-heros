import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function HeroList({ children }: PropsWithChildren) {
  return <HeroListContainer>{children}</HeroListContainer>;
}

const HeroListContainer = styled.div`
  padding: 3rem 2rem 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  > * {
    flex: 1;
  }
`;
