"use client";

import {
  Box,
  AbsoluteCenter,
  useColorModeValue,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

import Section from "../components/section";

const Home = () => {
  const bg = useColorModeValue("brand.500", "teal");
  return (
    <Box>
      <Section>
        <Heading textAlign={"center"}>Hi. I'm Raphael</Heading>
        <Text textAlign={"center"}>Software Engineer in Singapore</Text>
      </Section>
      <Section bg="palette.200">
        <Heading>Hi. I am Raphael</Heading>
        <Text>Software Engineer in Singapore</Text>
      </Section>
      <Section>
        <Heading>Hi. I am Raphael</Heading>
        <Text>Software Engineer in Singapore</Text>
      </Section>
    </Box>
  );
};

export default Home;
