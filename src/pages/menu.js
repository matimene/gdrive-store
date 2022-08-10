import {
  Container,
  Box,
  Heading,
  Text,
  Spacer,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Button,
} from "@chakra-ui/react";
import MenuItem from "../components/Menu/MenuItem";
import config from "../helpers/config";
import { GetStaticProps } from "next";
import api from "./api";
import groupBy from "lodash.groupby";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Menu = ({ products, locale }) => {
  const { t } = useTranslation();
  const processedProducts = groupBy(products, `type_${locale}`);
  const menuSections = Object.keys(processedProducts);

  return (
    <Stack h="full" alignItems="center" direction="column">
      <Stack
        flexGrow={1}
        alignItems="center"
        direction="column"
        textAlign="center"
        paddingX={6}
        pt={4}
        width="90%"
      >
        <Box>
          <Heading
            as="h3"
            fontSize={24}
            variant="page-subtitle"
            textTransform="uppercase"
            letterSpacing={4}
          >
            {t("MENU.title")}
          </Heading>
        </Box>
        <Box minW="full">
          <Tabs
          // defaultIndex={1}
          >
            <TabList justifyContent="center">
              {menuSections.map((item, i) => (
                <Tab
                  _selected={{
                    color: "primary",
                    borderBottom: "2px solid",
                    fontWeight: "bold",
                  }}
                  key={item.id || `tab_${i}`}
                >
                  {item?.name || item}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {menuSections.map((item, i) => (
                <TabPanel key={`tabpanel_${i}`}>
                  {processedProducts[item].map((item) => (
                    <MenuItem locale={locale} key={item.id} item={item} />
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
      {/* <Box
        paddingY="100px"
        bgImage={`url('${config.bgImgUrl}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        w="100%"
        marginX="-16px"
        textAlign="center"
      >
        <Heading as="h3" fontSize={28} variant="page-subtitle">
          Book your table now!
        </Heading>
        <Flex justifyContent="center" mt="16px">
          <Text>Call for an appointment &nbsp;</Text>
          <Text textDecoration="underline" fontWeight="bold">
            +34 674685241
          </Text>
        </Flex>
        <Button mt="16px" size="lg">
          Book now
        </Button>
      </Box> */}
    </Stack>
  );
};

export const getStaticProps = async ({ locale }) => {
  const { products } = await api.getProducts();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      products,
      locale,
    },
    // revalidate: false, //chaching
  };
};

export default Menu;
