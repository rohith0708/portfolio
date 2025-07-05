import { Box, Flex, chakra } from "@chakra-ui/react";

const LineWithCircle = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={"gray.200"}
        top="0px"
      />

      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid"
          borderColor="primary.500"
          backgroundImage="none"
          opacity={1}
        />
      </Box>
    </Flex>
  );
};

export default LineWithCircle;
