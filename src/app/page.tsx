"use client";

import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Image,
  Flex,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

import Section from "../components/section";
import Timeline from "@/components/timeline";

const Home = () => {
  const bg = useColorModeValue("brand.500", "teal");
  const normalTextSize = useBreakpointValue(
    { base: "14px", sm: "16px", md: "18px", lg: "20px", xl: "22px" },
    { ssr: false }
  );
  const subSubSectionTextSize = useBreakpointValue(
    { base: "18px", sm: "18px", md: "22px", lg: "26px", xl: "30px" },
    { ssr: false }
  );
  const subSectionTitleTextSize = useBreakpointValue(
    { base: "24px", sm: "24px", md: "28px", lg: "36px", xl: "42px" },
    { ssr: false }
  );

  return (
    <Box>
      <Section marginTop="-50px" h="100vh" w="100vw" padding={"50px"}>
        <Heading textAlign={"center"} fontSize={subSectionTitleTextSize}>
          Hi. I&apos;m Raphael
        </Heading>
        <Text textAlign={"center"} fontSize={normalTextSize}>
          Software Engineer in Singapore
        </Text>
      </Section>
      <Section
        h="100vh"
        w="100vw"
        bg="palette.200"
        headerComponent={
          <Flex h={16} alignItems={"center"} justifyContent={"center"}>
            <Text textAlign={"center"} fontSize={subSectionTitleTextSize}>
              About me
            </Text>
          </Flex>
        }
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={{ base: "70px", sm: "70px" }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box p={4} wordBreak={"break-word"} width={{ md: "65%", lg: "50%" }}>
            <Text fontSize={normalTextSize}>
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
              marginLeft={"auto"}
              marginRight={"auto"}
            />
            <Box m={4}></Box>
            <Text textAlign={"center"} fontSize={subSubSectionTextSize}>
              Raphael Chua
            </Text>

            <Link
              color="teal.500"
              href="/raphael_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text textAlign={"center"} fontSize={normalTextSize}>
                Download resume
              </Text>
            </Link>
          </Box>
        </Flex>
      </Section>
      <Section
        makeAbsoluteCenter={false}
        w="100vw"
        paddingBottom="100px"
        headerComponent={
          <Flex h={16} alignItems={"center"} justifyContent={"center"}>
            <Text textAlign={"center"} fontSize={subSectionTitleTextSize}>
              Work Experience
            </Text>
          </Flex>
        }
      >
        <Timeline></Timeline>
      </Section>
    </Box>
  );
};

export default Home;
