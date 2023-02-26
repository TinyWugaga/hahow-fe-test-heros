import { DefaultTheme } from "styled-components";

const surface = {
  source: "0, 0, 0",
  activeOpacity: "0.54",
  hoverOpacity: "0.04",
  selectedOpacity: "0.08",
  disabledOpacity: "0.06",
  focusOpacity: "0.12",
};

export const theme: DefaultTheme = {
  palette: {
    primary: "rgba(0, 190, 164, 1)",
    secondary: "rgba(250, 139, 0, 1)",
    yellow: "rgba(255, 238, 88, 1)",
    brown: "rgba(224, 190, 153, 1)",
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disable: "rgba(0, 0, 0, 0.38)",
    },
    background: {
      paper: "rgb(255, 255, 255)",
      surface: `rgb(${surface.source})`,
    },
    action: {
      active: `rgba(${surface.source}, ${surface.activeOpacity})`,
      hover: `rgba(${surface.source}, ${surface.hoverOpacity})`,
      selected: `rgba(${surface.source}, ${surface.selectedOpacity})`,
      disabled: `rgba(${surface.source}, ${surface.disabledOpacity}`,
      focus: `rgba(${surface.source}, ${surface.focusOpacity}`,
    },
  },
  shape: {
    borderRadius: "0.5rem",
  },
};
