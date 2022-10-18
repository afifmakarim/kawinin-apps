import {
  Box,
  Avatar,
  HStack,
  Text,
  VStack,
  Flex,
  Divider,
} from "@chakra-ui/react";
import React from "react";

interface WishPropsTypes {
  name: string;
  pesan: string;
  timestamp: string;
  absensi?: "hadir" | "tidakHadir" | "ragu";
}

export default function WishListItem({
  name,
  timestamp,
  pesan,
}: WishPropsTypes) {
  return (
    <Flex
      backgroundColor="white"
      p={4}
      borderRadius={8}
      shadow="md"
      direction="column"
      my={2}
    >
      <HStack alignItems="start">
        <Avatar name={name} size="sm" />
        <VStack spacing={1} alignItems="start">
          <Text fontSize="sm">{name}</Text>
          <Text fontSize="xs">{timestamp}</Text>
          <Text fontSize="xs">{pesan}</Text>
        </VStack>
      </HStack>
      <Divider borderColor="gray.300" my={4} />
    </Flex>
  );
}
