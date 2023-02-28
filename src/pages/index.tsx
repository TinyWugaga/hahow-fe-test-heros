import styled, { keyframes } from "styled-components";

import { PixelLoader } from "@/components/Icons";

export default function Home() {
  return <LoadingSpinner />;
}

const loadingKeyframe = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(90deg) scale(1.2);
  }
  50% {
    transform: rotate(180deg) scale(1);
  }
  75% {
    transform: rotate(270deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const LoadingSpinner = styled(PixelLoader)`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 5em;
  height: 5em;

  filter: opacity(80%);

  animation: ${loadingKeyframe} 6s infinite linear;
`;
