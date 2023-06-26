import { AbsoluteCenter, Box, Center } from "@chakra-ui/react";
import React, { ComponentPropsWithoutRef } from "react";

interface SectionProps {
  bg?: string;
  marginTop?: string;
  paddingTop?: string;
  children: React.ReactNode;
  makeAbsoluteCenter?: boolean;
  display?: string;
  headerComponent?: React.ReactNode;
  [x: string]: any;
}

const section: React.FC<SectionProps> = ({
  bg = "palette.100",
  marginTop,
  paddingTop,
  children,
  makeAbsoluteCenter = true,
  display,
  headerComponent,
  ...props
}) => {
  return (
    <Box
      position="relative"
      maxW="100%"
      bg={bg}
      minH={"100vh"}
      paddingTop={{ base: "20px", md: "30px", lg: "50px" }}
      // paddingBottom={{ base: "20px", md: "30px", lg: "60px" }}
      {...props}
    >
      {headerComponent ? headerComponent : null}
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
