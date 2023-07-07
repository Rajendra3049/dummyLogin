import React from "react";
import { Alert, AlertIcon, Box, CloseButton, Flex } from "@chakra-ui/react";

const DynamicAlert = ({ message, type, onClose }) => {
  return (
    <Flex align="center" justify="center" w="full">
      <Alert
        status={type}
        variant="subtle"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        textAlign="center"
        height="auto"
        p={2}>
        <Flex align="center" justify="center" flex="1">
          <AlertIcon boxSize="20px" mr={2} />
          <Box fontWeight="bold" fontSize="sm">
            {message}
          </Box>
        </Flex>
        <CloseButton size="sm" onClick={onClose} />
      </Alert>
    </Flex>
  );
};

export default DynamicAlert;
