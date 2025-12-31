import { useEffect } from "react";
import styled from "styled-components";

import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo-light.png" : "/logo-dark.png";

  useEffect(
    function () {
      // Try to find an existing favicon
      let link = document.querySelector("link[rel~='icon']");

      // If it doesn't exist, create it and append it to the <head>
      if (!link) {
        link = document.createElement("link");
        link.type = "image/png";
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
      }

      // Set the source
      link.href = src;
    },
    [src]
  );

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
