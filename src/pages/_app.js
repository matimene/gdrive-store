import Layout from "../components/layouts/main";
import LayoutBg from "../components/layouts/mainBg";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import { appWithTranslation } from "next-i18next";

const layouts = {
  Main: Layout,
  BG: LayoutBg,
};

const Website = ({ Component, pageProps, router }) => {
  const Layout =
    layouts[Component.layout || "Main"] || ((children) => <>{children}</>);

  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default appWithTranslation(Website);
