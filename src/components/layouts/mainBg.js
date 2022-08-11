import { Flex, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Primary/Navbar";
import config from "../../helpers/config";
import { useEffect, useState } from "react";
import Footer from "../Primary/Footer";

const BG_IMAGES = config.bgImages;

const MainBg = ({ children, router }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === BG_IMAGES.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      <Flex
        height="100%"
        as="main"
        pb={8}
        display="flex"
        flexDirection="column"
        bgColor="none"
        bgImage={`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${BG_IMAGES[currentIndex]}')`}
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
