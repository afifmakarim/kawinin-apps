import {
  Container,
  VStack,
  Heading,
  HStack,
  Text,
  Box,
  Divider,
  Link,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import CustomPrimaryButton from "../../atoms/Button";

interface AkadProps {
  icon: React.ReactNode;
  title: string;
  hari: string;
  tanggal: string;
  tahun: string;
  bulan: string;
  jam: string;
  lokasi: string;
  alamat: string;
  mapLocation: string;
}
export default function AkadSection({
  icon,
  title,
  hari,
  tanggal,
  tahun,
  bulan,
  jam,
  lokasi,
  alamat,
  mapLocation,
}: Readonly<AkadProps>) {
  return (
    <Container
      sx={{ background: "rgba(255, 255, 255, 0.29)" }}
      borderRadius={20}
      py={14}
      my={8}
      boxShadow="xl"
    >
      <VStack color="brand.100" gap={1}>
        {icon}
        <Heading fontFamily="Niconne" fontWeight="light">
          {title}
        </Heading>
        <HStack fontFamily="Libre Baskerville" fontSize="2xl">
          <Flex w="33%">
            <Text>{hari}</Text>
          </Flex>
          <Flex align="center" gap={4}>
            <Divider
              orientation="vertical"
              height={50}
              borderColor="brand.100"
              borderStartWidth={2}
            />
            <Box lineHeight={9} textAlign="center">
              <Text fontSize="4xl">{tanggal}</Text>
              <Text fontSize="2xl">{tahun}</Text>
            </Box>
            <Divider
              orientation="vertical"
              height={50}
              borderColor="brand.100"
              borderStartWidth={2}
            />
          </Flex>
          <Flex w="33%">
            <Text>{bulan}</Text>
          </Flex>
        </HStack>

        <Text fontWeight="bold" fontSize="sm">
          Pukul {jam} - Selesai
        </Text>
        <Text fontWeight="bold" fontSize="sm">
          Alamat
        </Text>
        <Text align="center" fontSize="sm">
          <span style={{ fontWeight: "bold" }}>{lokasi}</span>
          <br /> {alamat}
        </Text>
        <Link href={mapLocation} isExternal>
          <CustomPrimaryButton
            size="sm"
            icon={<FaSearchLocation />}
            title="Lihat Maps"
          />
        </Link>
      </VStack>
    </Container>
  );
}
