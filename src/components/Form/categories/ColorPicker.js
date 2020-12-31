import React from "react";

import { HuePicker } from "react-color";
import { Flex, Box, Text } from "@chakra-ui/react";

export function ColorPicker({ colorSelector, defaultColor }) {
  const handleColor = (color) => {
    return colorSelector({ color: color.hex });
  };
  return (
    <Flex alignItems="flex-end">
      <Box mt="20px" mr="20px">
        <Text pb="2" fontWeight="500">
          Select the category color
        </Text>
        <HuePicker onChange={handleColor} color={defaultColor.color} />
      </Box>
      <Box>
        <Box
          w="35px"
          h="16px"
          borderRadius="2px"
          backgroundColor={defaultColor.color}
          p="relative"
        ></Box>
      </Box>
    </Flex>
  );
}
