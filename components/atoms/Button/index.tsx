import { Button, Flex } from "@chakra-ui/react";
import React from "react";
interface Props {
  title: string;
  size: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}
export default function CustomPrimaryButton({
  title,
  onClick,
  size,
  icon,
}: Props) {
  return (
    <Button
      size={size}
      bg="brand.100"
      color="#ffff"
      _hover={{
        bg: "#ebedf0",
        color: "brand.100",
        borderColor: "brand.100",
        border: "2px",
      }}
      onClick={onClick}
      borderRadius="40"
    >
      <Flex gap={2} alignItems="center">
        {icon} {title}
      </Flex>
    </Button>
  );
}
