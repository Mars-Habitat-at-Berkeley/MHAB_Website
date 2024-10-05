import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)`
  &.typewriter-effect {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: geist-mono, monospace;
  }

  &.typewriter-effect > .text {
    max-width: 0;
    animation: typing 3s steps(var(--characters)) infinite;
    white-space: nowrap;
    overflow: hidden;
  }

  &.typewriter-effect:after {
    content: "";
    animation: blink 1s infinite;
    animation-timing-function: step-end;
  }

  @keyframes typing {
    75%,
    100% {
      max-width: calc(var(--characters) * 1ch);
    }
  }

  @keyframes blink {
    0%,
    75%,
    100% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
  }
`;

interface CustomStyles extends React.CSSProperties {
  "--characters": number | string;
}

function Typewriter() {
  const text1 = "Mars Habitat";
  const text2 = "at Berkeley";

  const styles: CustomStyles = {
    "--characters": Math.max(text1.length, text2.length)
  };

  return (
    <StyledBox className="typewriter-effect">
      <Box style={styles} className="text" id="typewriter-text">
        <span>{text1}</span>
        <br />
        <span>{text2}</span>
      </Box>
    </StyledBox>
  );
}

export default Typewriter;
