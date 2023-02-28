import styled from "styled-components";

import { PaperMixin } from "@/styles/commonStyles";

const HeroListContainer = styled.div`
  margin: 2rem;
  padding: 2.6rem 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  border-radius: ${({ theme }) => theme.shape.borderRadius};

  ${({ theme }) =>
    PaperMixin("", {
      backgroundColor: theme.palette.primary,
    })}

  container-type: inline-size;
`;

export default HeroListContainer;
