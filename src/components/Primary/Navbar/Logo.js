import NextLink from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "styled-components";
import config from "../../../helpers/config";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <NextLink passHref href="/" scroll={false}>
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            {config.storeName}
          </Text>
        </LogoBox>
      </a>
    </NextLink>
  );
};

export default Logo;
