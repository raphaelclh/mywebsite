import { AbsoluteCenter, Box } from "@chakra-ui/react";
import React from "react";

const section = ({
  bg = "palette.100",
  children,
  ...props
}: {
  bg?: string;
  children: React.ReactNode;
}) => {
  return (
    <Box position="relative" h="100vh" w="100vw" maxW="100%" bg={bg}>
      <AbsoluteCenter p="4" color="white" axis="both">
        {children}
      </AbsoluteCenter>
    </Box>
  );
};

export default section;
