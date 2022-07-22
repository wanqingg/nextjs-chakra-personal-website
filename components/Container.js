import React from "react";
import Link from "next/link";
import { useColorMode, Flex, Box, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

import DarkModeSwitch from "./DarkModeSwitch";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
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
    transition: height: .5s, line-height .5s;
  `;

  return (
    <>
      <StickyNav>
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
    </>
  );
};

export default Container;
