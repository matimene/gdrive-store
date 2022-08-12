import {
  Container,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import config from "../../../helpers/config";

const Footer = (props) => {

  return (
    <Box
      position="fixed"
      as="footer"
      w="full"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ bottom: 0 }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        pt={4}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Stack
          direction={{ base: "column" }}
          display={{ base: "flex" }}
          width={{ base: "full" }}
          alignItems="center"
          flexGrow={1}
        >
          <Text fontSize={14}>{config.storeAddress}</Text>
          <Flex justifyContent="center" alignItems="center" mt="0 !important">
            <PhoneIcon mr="6px" w={3} h={3} />
            <Text fontSize={14} fontWeight="bold">
              {config.storePhone}
            </Text>
          </Flex>
          <Text fontSize={11}>
            {config.storeTitle} Ecommerce © 2022
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
