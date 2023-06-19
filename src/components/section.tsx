import { AbsoluteCenter, Box, Center } from "@chakra-ui/react";
import React from "react";

const section = ({
  bg = "palette.100",
  marginTop,
  paddingTop,
  children,
  makeAbsoluteCenter = true,
  display,
}: {
  bg?: string;
  marginTop?: string;
  paddingTop?: string;
  children: React.ReactNode;
  makeAbsoluteCenter?: boolean;
  display?: string;
}) => {
  return (
    <Box
      position="relative"
      h="100vh"
      w="100vw"
      maxW="100%"
      bg={bg}
      padding={"50px"}
    >
      {makeAbsoluteCenter ? (
        <AbsoluteCenter
          width={"full"}
          paddingTop={paddingTop}
          p="4"
          color="white"
          axis="both"
          marginTop={marginTop}
          display={display}
        >
          {children}
        </AbsoluteCenter>
      ) : (
        <Center p="4" display={display} width={"full"}>
          {children}
        </Center>
      )}
    </Box>
  );
};

export default section;
