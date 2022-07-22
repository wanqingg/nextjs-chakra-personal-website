import Head from "next/head";
import { useColorMode, Heading, Flex, Stack, Text } from "@chakra-ui/react";

import Container from "../components/Container";

export default function Home() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>Home - Maxcy L</title>
        <meta name='description' content='Portfolio of Maxcy L' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading mb={2}>Hi, I'm Maxcy L</Heading>
          <Text color={colorSecondary[colorMode]}>
            Do non enim magna mollit sunt ad anim ullamco nostrud id culpa
            proident minim et. Enim nostrud minim dolor nulla minim consectetur
            deserunt esse eiusmod exercitation.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
