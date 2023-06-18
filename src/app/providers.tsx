// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
