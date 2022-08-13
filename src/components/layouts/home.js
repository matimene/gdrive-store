import { Flex, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Primary/Navbar";
import config from "../../helpers/config";
import Footer from "../Primary/Footer";
import useIntervalImage from "../../helpers/hooks/useIntervalmage";

const BG_IMAGES = config.homeBgImages;

const MainBg = ({ children, router }) => {
  const bgImage = useIntervalImage(BG_IMAGES, 2500);

  return (
    <>
      <Flex
        height="100%"
        as="main"
        pb={8}
        display="flex"
        flexDirection="column"
        bgImage={`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
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
      <Footer />
    </>
  );
};

export default MainBg;
