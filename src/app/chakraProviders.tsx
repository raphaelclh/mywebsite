// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const colors = {
  palette: {
    100: "#F4F4F2",
    200: "#E8E8E8",
    300: "#BBBFCA",
    400: "#495464",
  },
};

const theme = extendTheme({
  colors: colors,
  components: {
    Text: {
      baseStyle: () => ({
        color: colors.palette[400],
      }),
    },
    Heading: {
      baseStyle: () => ({
        color: colors.palette[400],
      }),
    },
  },
  fonts: {
    heading: `'Fira Code', sans-serif`,
    body: `'Fira Code', sans-serif`,
  },
});

const ChakraProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Global
          styles={css`
            @keyframes typing {
              from {
                width: 0;
              }
              to {
                width: 100%;
              }
            }
            @keyframes blink-caret {
              from,
              to {
                border-color: transparent;
              }
              50% {
                border-color: orange;
              }
            }
          `}
        />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};

export default ChakraProviders;
