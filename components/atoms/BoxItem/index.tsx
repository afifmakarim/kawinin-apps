import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface BoxItemProps {
  time: number;
  title: string;
}

export default function BoxItem({ time = 0, title }: BoxItemProps) {
  return (
    <Box
      p="1"
      bgColor="brand.100"
      fontSize={12}
      fontWeight="bold"
      borderRadius={10}
    >
      <Text align="center" color="white" fontSize={24}>
        {time}
      </Text>
      <Text align="center" color="white">
        {title}
      </Text>
    </Box>
  );
}
