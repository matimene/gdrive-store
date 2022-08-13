import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useOutsideClick,
  Flex,
  useColorModeValue,
  Td,
  Tr,
  Tbody,
  Table,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { SmallCloseIcon } from '@chakra-ui/icons'

const PADDING = 5;

function CartPopover({ items, products, locale, handleMarkItem }) {
  const popoverRef = React.useRef();
  const { onOpen, onClose, isOpen } = useDisclosure();
  useOutsideClick({
    ref: popoverRef,
    handler: () => onClose(),
  });

  return (
    <Popover
      initialFocusRef={popoverRef}
      placement="top-end"
      closeOnBlur={false}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger mt='0'>
        <Flex 
          mt='0 !important'
          position='fixed'
          bottom='20px'
          right='20px'
          width='30px'
          height='30px'
          justifyContent='center'
          alignItems='center'
          borderRadius='15px'
          fontWeight='bold'
          bg={useColorModeValue("#20202380", "#ffffff40")}
          style={{ backdropFilter: "blur(10px)" }}
        >{items.length}</Flex>
      </PopoverTrigger>
      <PopoverContent
        p={`${PADDING}px`}
        color={useColorModeValue("black", "white")}
        bg={useColorModeValue("#ffffff40", "#20202380")}
        style={{ backdropFilter: "blur(10px)" }}
        maxH='75vh'
        maxW='250px'
      >
        <TableContainer 
          overflowY='scroll'
          // sx={{
          //   scrollbarWidth: 'none',
          //   '::-webkit-scrollbar': {
          //     display: 'none',
          //   },
          // }}
        >
          <Table size='sm' variant='striped' colorScheme='blackAlpha'>
            <Tbody>
              {items?.map(itemId => {
                return (
                  <Tr key={itemId}>
                    <Td padding='10px'>
                      <SmallCloseIcon 
                        onClick={() => handleMarkItem(itemId, true)}
                        cursor='pointer' 
                        mr='12px' w={4} h={4} 
                        color='primary'
                      />
                      {products?.find(item => item?.id === itemId)[`title_${locale}`] || itemId}
                    </Td>
                  </Tr>
              )})}
            </Tbody>
          </Table>
        </TableContainer>
      </PopoverContent>
    </Popover>
  );
}


export default CartPopover;
