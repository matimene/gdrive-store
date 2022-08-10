import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import Router from "next/router";
import config from "../helpers/config";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page = () => {
  console.log(config);
  const { t } = useTranslation();

  return (
    <Stack h="full" alignItems="center" direction="column">
      <Stack
        flexGrow={1}
        alignItems="center"
        direction="column"
        textAlign="center"
        justifyContent="space-around"
        paddingX={6}
      >
        <Box>
          <Heading
            as="h3"
            fontSize={18}
            variant="page-subtitle"
            textTransform="uppercase"
            letterSpacing={7}
            color="white"
          >
            {config.storeHomeSubtitle}
          </Heading>
          <Heading
            color="white"
            as="h1"
            pt={4}
            fontSize={60}
            variant="page-title"
          >
            {config.storeHomeTitle}
          </Heading>
          <Text color="white" pt={4} fontSize={16}>
            {config.storeHomeDescription}
          </Text>
          <Button
            mt="36px"
            size="lg"
            border="2px solid"
            backgroundColor="transparent"
            color="primary"
            onClick={() => Router.push({ pathname: "/menu" })}
          >
            {t("HOME.menuButton")}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

Page.layout = "BG";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // revalidate: false, //chaching
  };
};

export default Page;
