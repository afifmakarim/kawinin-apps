import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  Box,
  Text,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function DrawerItem({ onClose, isOpen, data }: any) {
  const router = useRouter();
  const { to } = router.query;

  return (
    <Drawer
      placement="bottom"
      onClose={onClose}
      isOpen={isOpen}
      blockScrollOnMount
    >
      <DrawerOverlay />
      <DrawerContent width="420px" mx="auto" height="95vh !important">
        <DrawerHeader
          borderBottomWidth="1px"
          p={2}
          fontSize="sm"
          textAlign="center"
        >
          CHECK-IN
        </DrawerHeader>
        <DrawerBody bgColor="brand.100" margin={4} p={0}>
          <VStack>
            <Box
              sx={{
                width: "100%",
                height: "200px",
                backgroundSize: "cover",
                backgroundImage:
                  "linear-gradient(to bottom, rgba(245, 246, 252, 0.32), rgba(0, 0, 0, 0.68)), url('/bg.svg')",
              }}
            >
              <VStack h="100%" color="white">
                <Box marginTop="auto" textAlign="center">
                  <Text fontWeight="bold">The Wedding of {data.title}</Text>
                  <Text fontSize="xs" pb={2}>
                    {data.weddingCeremony?.dates.day},{" "}
                    {data.weddingCeremony?.dates.date}{" "}
                    {data.weddingCeremony?.dates.month}{" "}
                    {data.weddingCeremony?.dates.year}
                  </Text>
                </Box>
              </VStack>
            </Box>
            <Box
              color="white"
              sx={{
                width: "100%",
                height: "200px",
              }}
              p={4}
            >
              <Text>Acara :</Text>
              <Text fontSize="md">
                {data.weddingCeremony?.dates.day},{" "}
                {data.weddingCeremony?.dates.date}{" "}
                {data.weddingCeremony?.dates.month}{" "}
                {data.weddingCeremony?.dates.year}
              </Text>
              <Text fontWeight="light" fontSize="xs">
                {data.weddingCeremony?.time}
              </Text>
              <HStack my={6}>
                <Text flexShrink={0} flexBasis={0} flexGrow="1">
                  Kepada Yth: <br />
                  Bpk/Ibu/Saudara/i <br />
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    {to}
                  </span>
                  <br /> di Tempat
                </Text>
                <Box bgColor="white" p={4} borderRadius={20}>
                  <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
                    width={150}
                    height={150}
                    alt=""
                  />
                </Box>
              </HStack>
              <Text fontSize="xs" align="center">
                Silahkan tunjukkan QR Code ini kepada penerima tamu undangan di
                lokasi acara. Scan QR Code digunakan untuk mencatat kehadiran
                dan menukarkan souvenir.
              </Text>
            </Box>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
