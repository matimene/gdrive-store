import Logo from "./Logo";
import NextLink from "next/link";
import {
  Link,
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import LinkItem from "./LinkItem";
import ThemeToggleButton from "./ThemeToggleButton";
import { getMenuItems } from "../../../helpers/menu-items";
import LocaleSwitcher from "./LangSwitcher";
import { useTranslation } from "next-i18next";

const Navbar = (props) => {
  const { t } = useTranslation();
  const { path } = props;
  const MENU_ITEMS = getMenuItems({ t, storeType: "bar" });

  return (
    <Box
      position="fixed"
      as="nav"
      w="full"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {MENU_ITEMS.map(
            (item) =>
              !item.hidden && (
                <LinkItem key={item.key} href={item.path} path={path}>
                  {item.label}
                </LinkItem>
              )
          )}
        </Stack>
        <Box flex={1} align="right">
          <LocaleSwitcher />
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList
                bg={useColorModeValue("#ffffffe3", "#202023db")}
                backdropFilter="blur(15px)"
                minW="fit-content"
              >
                {MENU_ITEMS.map(
                  (item) =>
                    !item.hidden && (
                      <NextLink key={item.key} href={item.path} passHref>
                        <MenuItem
                          fontWeight="bold"
                          letterSpacing="1px"
                          textTransform="uppercase"
                          as={Link}
                          justifyContent="end"
                        >
                          {item.label}
                        </MenuItem>
                      </NextLink>
                    )
                )}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
    // revalidate: false, //chaching
  };
};

export default Navbar;
