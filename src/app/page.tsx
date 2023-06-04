"use client";

import { Box, useColorModeValue, Container, Text } from "@chakra-ui/react";

const Home = () => {
  const bg = useColorModeValue("brand.500", "teal");
  return (
    <Container centerContent>
      <Text>Home Page</Text>
    </Container>
  );
};

export default Home;
