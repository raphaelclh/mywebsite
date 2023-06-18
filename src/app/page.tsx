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
    <Container centerContent>
      <Section>
        <Heading>Hi. I am Raphael</Heading>
        <Text>Software Engineer in Singapore</Text>
      </Section>
      <Section>
        <Heading>Hi. I am Raphael</Heading>
        <Text>Software Engineer in Singapore</Text>
      </Section>
      <Section>
        <Heading>Hi. I am Raphael</Heading>
        <Text>Software Engineer in Singapore</Text>
      </Section>
    </Container>
  );
};

export default Home;
