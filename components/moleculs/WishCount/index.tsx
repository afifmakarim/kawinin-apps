import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function WishCount({
  tidakHadirTotal,
  hadirTotal,
  raguTotal,
}: any) {
  return (
    <>
      <HStack
        alignItems="center"
        justifyContent="center"
        textColor="brand.100"
        mb={3}
      >
        <FaEnvelope />
        <Text align="center" fontSize="md" fontWeight="bold">
          {tidakHadirTotal + raguTotal + hadirTotal} Ucapan
        </Text>
      </HStack>
      <HStack mb={2} justifyContent="center">
        <Box
          lineHeight="4"
          textAlign="center"
          background="teal"
          padding={3}
          color="white"
          borderRadius={6}
        >
          <Text>{hadirTotal}</Text>
          <Text fontSize="xs">Hadir</Text>
        </Box>
        <Box
          lineHeight="4"
          textAlign="center"
          background="red"
          padding={3}
          color="white"
          borderRadius={6}
        >
          <Text>{tidakHadirTotal}</Text>
          <Text fontSize="xs">Tidak Hadir</Text>
        </Box>
        <Box
          lineHeight="4"
          textAlign="center"
          background="gray"
          padding={3}
          color="white"
          borderRadius={6}
        >
          <Text>{raguTotal}</Text>
          <Text fontSize="xs">Ragu</Text>
        </Box>
      </HStack>
    </>
  );
}
