// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  palette: {
    100: "#DDE6ED",
    200: "#9DB2BF",
    300: "#526D82",
    400: "#27374D",
  },
};

const theme = extendTheme({
  colors: colors,
  components: {
    Text: {
      baseStyle: () => ({
        color: colors.palette[200],
      }),
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
