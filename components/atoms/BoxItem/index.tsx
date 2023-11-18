import { Box, Text } from "@chakra-ui/react";
import { BoxItemProps } from "./boxItem.interfaces";

export default function BoxItem({ time = 0, title }: Readonly<BoxItemProps>) {
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
