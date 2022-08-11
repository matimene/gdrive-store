import {
  Box,
  Heading,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import MenuItem from "../components/Menu/MenuItem";
import api from "./api";
import groupBy from "lodash.groupby";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import CartPopover from "../components/Menu/CartPopover";

const Menu = ({ products, locale }) => {
  const [markedProducts, setMarkedProducts] = useState([])
  const { t } = useTranslation();
  const processedProducts = groupBy(products, `type_${locale}`);
  const menuSections = Object.keys(processedProducts);

  const handleMarkItem = (id, isMarked) => {
    isMarked ? setMarkedProducts(markedProducts.filter(itemId => itemId !== id)) : setMarkedProducts([...markedProducts, id])
  }

  return (
    <Stack h="full" alignItems="center" direction="column">
      <Stack
        flexGrow={1}
        alignItems="center"
        direction="column"
        textAlign="center"
        paddingX={2}
        pt={4}
        width="full"
      >
        <Box maxW='100%'>
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
        <Box maxW='100%' minW='90%'>
          <Tabs
            // defaultIndex={1}
          >
            <TabList
              justifyContent={{ base: 'initial', md: 'center' }}
              overflowY="hidden"
              overflowX="visible"
              sx={{
                scrollbarWidth: 'none',
                '::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {menuSections.map((item, i) => (
                <Tab
                  _selected={{
                    color: "primary",
                    borderTop: "2px solid",
                    fontWeight: "bold",
                  }}
                  key={item.id || `tab_${i}`}
                  flexShrink={0}
                >
                  {item?.name || item}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {menuSections.map((item, i) => (
                <TabPanel key={`tabpanel_${i}`}>
                  {processedProducts[item].map((item) => (
                    <MenuItem 
                      key={item.id} 
                      item={item}
                      locale={locale} 
                      isMarked={markedProducts.indexOf(item?.id) !== -1}
                      handleMarkItem={handleMarkItem} 
                    />
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
      {markedProducts?.length? <CartPopover handleMarkItem={handleMarkItem} items={markedProducts} products={products} locale={locale} /> : ''}
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
