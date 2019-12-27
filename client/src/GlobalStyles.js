import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        @font-face {
          font-family: "Antropos";
          src: url("/fonts/Antropos.eot");
          src: url("/fonts/Antropos.eot?#iefix") format("embedded-opentype"),
            url("/fonts/Antropos.otf") format("opentype"), url("/fonts/Antropos.svg") format("svg"),
            url("/fonts/Antropos.ttf") format("truetype"),
            url("/fonts/Antropos.woff") format("woff"), url("/fonts/Antropos.woff2") format("woff2");
        }

        body {
          margin: 0;
          background: ${theme.colors.background};
        }
      `}
    />
  );
}
export default GlobalStyles;
