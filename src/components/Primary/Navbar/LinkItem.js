import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("grassTeal", "whiteAlpha.900");
  const activeColor = useColorModeValue("primary", "primary");

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? activeColor : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
