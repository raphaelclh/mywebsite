"use client";

import {
  Box,
  AbsoluteCenter,
  useColorModeValue,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

const Home = () => {
  const bg = useColorModeValue("brand.500", "teal");
  return (
    <Container centerContent>
      <Box position="relative" h="80vh" w="100vw">
        <AbsoluteCenter p="4" color="white" axis="both">
          <Heading>Hi. I am Raphael</Heading>
          <Text>Software Engineer in Singapore</Text>
        </AbsoluteCenter>
      </Box>
    </Container>
  );
};

export default Home;
