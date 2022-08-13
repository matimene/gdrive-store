import { Flex, Container, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Primary/Navbar";
import config from "../../helpers/config";
import useIntervalImage from "../../helpers/hooks/useIntervalmage";

const BG_IMAGES = config.menuBgImages;

const Main = ({ children, router }) => {
  const bgImage = useIntervalImage(BG_IMAGES, 5000);

  return (
    <Flex
      height="100%"
      as="main"
      pb={8}
      display="flex"
      flexDirection="column"
      position='relative'
      bgImage={useColorModeValue(`linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(${bgImage})`, `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})`)}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      overflow='scroll'
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{config.storeTitle}</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container h="100%" maxW="container.xl" pt="14">
        {children}
      </Container>
    </Flex>
  );
};

export default Main;
