import React from "react";
import Link from "next/link";
import { useColorMode, Flex, Box, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

import Sidebar from "../components/Sidebar";
import DarkModeSwitch from "./DarkModeSwitch";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <Sidebar />
      <StickyNav
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        maxWidth='800px'
        minWidth='356px'
        width='100%'
        bg={bgColor[colorMode]}
        as='nav'
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx='auto'
      >
        <Box>
          <Link href='/' passHref>
            <Button
              as='a'
              variant='ghost'
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </Link>
          <Link href='/blog' passHref>
            <Button
              as='a'
              variant='ghost'
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Blog
            </Button>
          </Link>
        </Box>
        <DarkModeSwitch />
      </StickyNav>
      <Flex
        as='main'
        justifyContent='center'
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        p={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
