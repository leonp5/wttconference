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
          font-family: "Baar Philos";
          src: url("/fonts/BaarPhilosBold.eot");
          src: url("/fonts/BaarPhilosBold.eot?#iefix") format("embedded-opentype"),
            url("/fonts/BaarPhilosBold.woff2") format("woff2"),
            url("/fonts/BaarPhilosBold.woff") format("woff"),
            url("/fonts/BaarPhilosBold.ttf") format("truetype"),
            url("/fonts/BaarPhilosBold.svg#BaarPhilosBold") format("svg");
          font-weight: bold;
          font-style: normal;
        }

        body {
          margin: 0;
          background: ${theme.colors.background};
          font-family: "Roboto", sans-serif;
        }
      `}
    />
  );
}
export default GlobalStyles;
