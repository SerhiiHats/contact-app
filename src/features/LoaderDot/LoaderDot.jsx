import {Typography} from "@mui/material";
import {css} from "@emotion/react";

const LoaderDot = () => {
  return (
    <Typography component="span"
                variant="body"
                color="text.primary"
                sx={css`
                    width: fit-content;
                    font-weight: inherit;
                    font-family: inherit;
                    font-size: 24px;
                    clip-path: inset(0 100% 0 0);
                    animation: l5 1.5s steps(11) infinite;
                    margin-left: 7px;

                    &:before {
                        content: ".........";
                    }

                    @keyframes l5 {
                        to {
                            clip-path: inset(0 -1ch 0 0)
                        }
                    }
                `}
    >
    </Typography>
  );
};

export default LoaderDot;