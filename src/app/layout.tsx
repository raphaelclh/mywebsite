// app/layout.tsx
"use client";
import { Providers } from "./providers";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Box, useColorModeValue, Container, Text } from "@chakra-ui/react";
import "@fontsource/fira-code"; // Defaults to weight 400
import "@fontsource/fira-code/400.css"; // Specify weight
// import "@fontsource/fira-code/400-italic.css"; // Specify weight and style

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Raphael C</title>
      <head>
        <link rel="icon" href="/icon2.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          {/* <Box bg="palette.100" w="100vw" h="100vh"> */}
          {/* <Navbar /> */}
          {children}
          <Footer />
          {/* </Box> */}
        </Providers>
      </body>
    </html>
  );
}
