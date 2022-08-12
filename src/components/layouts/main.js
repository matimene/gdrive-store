import { Flex, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Primary/Navbar";
import config from "../../helpers/config";
import SafeHydrate from "../Primary/SafeHydrate";

const Main = ({ children, router }) => {
  return (
    <Flex
      height="100%"
      as="main"
      pb={8}
      display="flex"
      flexDirection="column"
      position='relative'
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{config.storeTitle}</title>
      </Head>
      <SafeHydrate>
        <Navbar path={router.asPath} />
      </SafeHydrate>
      <Container h="100%" maxW="container.xl" pt="14">
        {children}
      </Container>
    </Flex>
  );
};

export default Main;
