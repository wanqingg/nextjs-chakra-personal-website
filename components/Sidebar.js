import { useState } from "react";
import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react/";
import { HamburgerIcon } from "@chakra-ui/icons";
const Sidebar = () => {
  const [navSize, setNavSize] = useState("large");
  return (
    <Flex
      pos='absolute'
      left='5'
      height='95vh'
      marginTop='2.5vh'
      boxShadow='0 4px 12px 0 rgba(0,0,0,0.05)'
      borderRadius={navSize === "small" ? "15px" : "30px"}
      w={navSize === "small" ? "75px" : "200px"}
      flexDir='column'
      justifyContent='space-between'
      zIndex='11'
      background='white'
    >
      <Flex
        p='5%'
        flexDir='column'
        alignItems='flex-start'
        as='nav'
        size={navSize}
      >
        <IconButton
          background='none'
          mt={5}
          _hover={{ background: "none" }}
          icon={<HamburgerIcon />}
          onClick={() => {
            if (navSize === "small") {
              setNavSize("large");
            } else {
              setNavSize("small");
            }
          }}
        />
      </Flex>
      <Flex
        p='5%'
        w='100%'
        flexDir='column'
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align='center'>
          <Avatar size='sm' src='avatar-1.jpg' />
          <Flex
            flexDir='column'
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as='h3' size='sm'>
              Maxcy L
            </Heading>
            <Text color='gray'>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
