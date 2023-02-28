import styled from "styled-components";

import { PaperMixin } from "@/styles/commonStyles";

const HeroListContainer = styled.div`
  margin: 1rem 2rem;
  padding: 3.4rem 3.2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  border-radius: ${({ theme }) => theme.shape.borderRadius};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  ${({ theme }) =>
    PaperMixin("", {
      backgroundColor: theme.palette.primary,
    })}

  container-type: inline-size;
`;

export default HeroListContainer;
