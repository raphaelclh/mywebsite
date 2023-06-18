import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About me",
    href: "/about",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      // bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="palette.100" px={4}>
        {/* <Flex h={16} position={"absolute"}>
          <Box sx={{ padding: 5 }}>
            <Text>Raphael Chua</Text>
          </Box>
        </Flex> */}
        <Flex h={16} alignItems={"center"} justifyContent={"center"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"}>
            {/* <Box>
              <Text>Logo</Text>
            </Box> */}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  <Text>{link.label}</Text>
                </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>

      <Flex p={4} />
    </>
  );
}
