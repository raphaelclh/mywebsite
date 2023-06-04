"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Box, useColorModeValue, Container, Text } from "@chakra-ui/react";

const Home = () => {
  const bg = useColorModeValue("brand.500", "teal");
  return (
    <Box bg="palette.400" w="100vw" h="100vh">
      <Navbar />
      <Container centerContent>
        <Text>
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production
        </Text>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
