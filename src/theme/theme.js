import { extendTheme } from "@chakra-ui/react";

// import BadgeTheme from "./components/Badge.theme";
// import ButtonTheme from "./components/Button.theme";
// import TextTheme from "./components/Text.theme";

export default extendTheme({
  styles: {
    global: {
      "html, body, #__next": {
        height: "100%",
      },
      body: {
        // minHeight: "100vh",
        // backgroundColor: "white",
        // color: "black",
        margin: 0,
      },
    },
  },
  fonts: {
    heading: "Mukta, sans-serif",
    body: "Mukta, sans-serif",
  },
  colors: {
    primary: "#fbc31b",
    black: "#363663",
  },
  // components: {
  //   Button: ButtonTheme,
  //   Badge: BadgeTheme,
  //   Text: TextTheme,
  // },
});
