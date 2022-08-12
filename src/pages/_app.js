import Layout from "../components/layouts/main";
import LayoutBg from "../components/layouts/mainBg";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import { appWithTranslation } from "next-i18next";
import React from "react";

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
        <React.Suspense fallback={<div>Loading...</div>}>
          <Component {...pageProps} key={router.route} />
        </React.Suspense>
      </Layout>
    </ChakraProvider>
  );
};

export default appWithTranslation(Website);
