import { Box, Flex, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Image } from '@chakra-ui/react'
import ImagePopover from "./ImagePopover";

const MenuItem = ({ item, locale, isMarked, handleMarkItem }) => {
  return (
    <Flex
      paddingY={"12px"}
      borderBottom="1px dashed #bbb"
      justifyContent="space-between"
      align="center"
      minW="100%"
    >
      <Box textAlign="start" width='full'>
        {item?.img ? (
          <ImagePopover img={item?.img}>
            <Image position='relative' zIndex={2} float='left' mr="6px" borderRadius='10px' width='80px' boxSize='80px' cursor="pointer" src={item?.img} alt={item[`title_${locale}`]} />
          </ImagePopover>
        ) : ''}
        <Flex cursor='pointer' onClick={() => handleMarkItem(item?.id, isMarked)} >
          <Text fontSize={18} color={isMarked? 'primary': ''} >{item[`title_${locale}`]}</Text>
          {item?.star && <StarIcon w={3} h={6} ml="6px" />}
        </Flex>
        <Text fontSize={15} opacity="0.7" width='100%'>
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
