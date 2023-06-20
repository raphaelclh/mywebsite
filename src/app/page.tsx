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
  Stack,
  Spacer,
  Link,
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
      <Section
        bg="palette.200"
        headerComponent={
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"center"}
            marginBottom={"100px"}
          >
            <Text
              textAlign={"center"}
              fontSize={{ base: "20px", sm: "20px", md: "25px", lg: "36px" }}
            >
              About me
            </Text>
          </Flex>
        }
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"center"}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box p={4} wordBreak={"break-word"} width={{ md: "65%", lg: "50%" }}>
            <Text
              fontSize={{ base: "10px", sm: "10px", md: "14px", lg: "16px" }}
            >
              A seasoned full-stack software engineer with a deep focus on
              problem-solving and architectural design. With significant
              experience in diverse roles across multiple organizations, I have
              developed a strong acumen for delivering scalable applications and
              efficient cloud solutions. <br /> <br /> My expertise spans the
              use of cutting-edge technologies including ReactJS, NodeJS, Java,
              and AWS, as well as leveraging Azure DevOps for pipeline
              strategies. I have a knack for swiftly adopting new frameworks and
              demonstrating consulting skills to aid client and peer
              understanding. <br />
              <br />
              Recognized for my contributions to a paper on Edge Computing in
              the esteemed IEEE Globecom 2019, I am a continuous learner aiming
              to implement innovative solutions to improve business operations
              and customer experience.
            </Text>
          </Box>
          <Box>
            <Image
              borderRadius="full"
              boxSize={{ base: "150px", md: "200px", lg: "250px" }}
              src="/profile_pic_1.jpg"
              alt="Profile Picture"
            />
            <Box m={4}></Box>
            <Text
              textAlign={"center"}
              fontSize={{ base: "20px", sm: "20px", md: "26px", lg: "30px" }}
            >
              Raphael Chua
            </Text>

            <Link
              color="teal.500"
              href="/raphael_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text
                textAlign={"center"}
                fontSize={{ base: "10px", sm: "10px", md: "14px", lg: "16px" }}
              >
                Download resume
              </Text>
            </Link>
          </Box>
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
