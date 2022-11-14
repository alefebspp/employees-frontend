import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
const EditPopover = ({ children }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
    >
      <PopoverTrigger>
        <IconButton
          colorScheme="gray"
          size="xs"
          icon={<FaEdit color="green" />}
          boxShadow="0px 0px 6px 0px rgba(0, 0, 0, 0.5)"
        />
      </PopoverTrigger>
      <PopoverContent p={5}>
        <PopoverArrow />
        <PopoverCloseButton />
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default EditPopover;
