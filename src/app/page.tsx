"use client";

import {
  Box,
  AbsoluteCenter,
  useColorModeValue,
  Container,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";

import Section from "../components/section";

const Home = () => {
  const bg = useColorModeValue("brand.500", "teal");
  return (
    <Box>
      <Section marginTop="-50px">
        <Heading
          textAlign={"center"}
          fontSize={{ base: "20px", sm: "20px", md: "25px", lg: "36px" }}
        >
          Hi. I&apos;m Raphael
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={{ base: "10px", sm: "10px", md: "14px", lg: "16px" }}
        >
          Software Engineer in Singapore
        </Text>
      </Section>
      <Section bg="palette.200">
        <Flex h={16} alignItems={"center"} justifyContent={"center"}>
          <Box p={10}>
            <Text
              textAlign={"center"}
              fontSize={{ base: "10px", sm: "10px", md: "14px", lg: "16px" }}
            >
              Software Engineer in Singapore
            </Text>
          </Box>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Flex>
      </Section>
      <Section>
        <Heading>Hi. I am Raphael</Heading>
        <Text>Software Engineer in Singapore</Text>
      </Section>
    </Box>
  );
};

export default Home;
