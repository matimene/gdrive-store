import { Box, Flex, Text } from "@chakra-ui/react";
import { InfoIcon, StarIcon } from "@chakra-ui/icons";
import ImagePopover from "./ImagePopover";

const MenuItem = ({ item, locale }) => {
  return (
    <Flex
      paddingY={"12px"}
      borderBottom="1px dashed #bbb"
      justifyContent="space-between"
      align="center"
      minW="100%"
    >
      <Box textAlign="start">
        {item?.img ? (
          <ImagePopover img={item?.img}>
            <Flex cursor="pointer">
              {item?.star && <StarIcon w={3} h={6} mr="6px" />}
              <Text fontSize={18}>{item[`title_${locale}`]}</Text>
              <InfoIcon ml="12px" w={3} h={6} />
            </Flex>
          </ImagePopover>
        ) : (
          <Flex>
            {item?.star && <StarIcon w={3} h={6} mr="6px" />}
            <Text fontSize={18}>{item[`title_${locale}`]}</Text>
          </Flex>
        )}
        <Text fontSize={15} opacity="0.7">
          {item[`description_${locale}`]}
        </Text>
      </Box>
      <Box pl="10px">
        <Text fontWeight={600} fontSize={18} color="primary">
          ${item?.price}
        </Text>
      </Box>
    </Flex>
  );
};

export default MenuItem;
