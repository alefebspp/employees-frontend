import { useToast } from '@chakra-ui/react';

const useToastMessage = () => {
  const toast = useToast();

  const handleToastSuccessMessage = (title, description) => {
    return toast({
      title: title,
      description: description,
      status: 'success',
      duration: 9000,
      isClosable: true
    });
  };
  const handleToastErrorMessage = (title, description) => {
    return toast({
      title: title,
      description: description,
      status: 'error',
      duration: 9000,
      isClosable: true
    });
  };
  return {
    handleToastSuccessMessage,
    handleToastErrorMessage
  };
};

export default useToastMessage;
