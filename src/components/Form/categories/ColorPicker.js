import React from "react";
import { Flex } from "components/Common";
import { HuePicker } from "react-color";
import { Box, Text } from "@chakra-ui/react";

export function ColorPicker({ colorSelector, defaultColor }) {
  const handleColor = (color) => {
    return colorSelector({ color: color.hex });
  };
  return (
    <Flex fullWidth>
      <Text pb="2" fontWeight="500">
        Select the category color
      </Text>
      <HuePicker onChange={handleColor} color={defaultColor.color} />
      <Box
        w="35px"
        h="16px"
        borderRadius="2px"
        backgroundColor={defaultColor.color}
        p="relative"
      ></Box>
    </Flex>
  );
}
