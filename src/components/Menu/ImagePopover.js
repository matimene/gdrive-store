import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Image,
  useDisclosure,
  useOutsideClick,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const BOX_SIZE = 300;
const PADDING = 5;
const SIZE = BOX_SIZE + PADDING * 2;

function ImagePopover({ children, img }) {
  const popoverRef = React.useRef();
  const { onOpen, onClose, isOpen } = useDisclosure();
  useOutsideClick({
    ref: popoverRef,
    handler: () => onClose(),
  });

  return (
    <Popover
      initialFocusRef={popoverRef}
      placement="bottom-start"
      closeOnBlur={false}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        p={`${PADDING}px`}
        color={useColorModeValue("black", "white")}
        bg={useColorModeValue("#ffffff40", "#20202380")}
        borderColor={useColorModeValue("#ffffff40", "#20202380")}
        style={{ backdropFilter: "blur(10px)" }}
        width={`${SIZE}px`}
        height={`${SIZE}px`}
      >
        <Image boxSize={`${BOX_SIZE}px`} objectFit="cover" src={img} alt='product-image' />
      </PopoverContent>
    </Popover>
  );
}

export default ImagePopover;
