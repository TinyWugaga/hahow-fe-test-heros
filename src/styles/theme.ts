import { DefaultTheme } from "styled-components";
import { Nunito, Montserrat } from "next/font/google";

const nunito = Nunito({ weight: ["300", "400", "700"], subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const surface = {
  source: "60, 60, 60",
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
      primary: "rgba(44, 23, 0, 0.87)",
      secondary: "rgba(44, 23, 0, 0.6)",
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
      disabled: `rgba(${surface.source}, ${surface.disabledOpacity})`,
      focus: `rgba(${surface.source}, ${surface.focusOpacity})`,
    },
  },
  shape: {
    borderRadius: "0.5rem",
  },
  typography: {
    title: {
      fontFamily: nunito.style.fontFamily,
      fontWeight: "400",
      fontSize: "2.215rem",
      lineHeight: "1.235",
      letterSpacing: "0.00735em",
    },
    subtitle: {
      fontFamily: nunito.style.fontFamily,
      fontWeight: "400",
      fontSize: "1.5rem",
      lineHeight: "1.334",
      letterSpacing: "0em",
    },
    body: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "1.5",
      letterSpacing: "0.00938em",
    },
    caption: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: "400",
      fontSize: "0.75rem",
      lineHeight: "1.66",
      letterSpacing: "0.03333em",
    },
  },
};
