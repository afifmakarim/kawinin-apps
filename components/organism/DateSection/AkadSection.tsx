import {
  Container,
  VStack,
  Heading,
  HStack,
  Text,
  Center,
  Box,
  Divider,
  Link,
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
}: AkadProps) {
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
        <HStack gap={2} fontFamily="Libre Baskerville" fontSize="2xl">
          <Text>{hari}</Text>
          <Center height="50px" bgColor="brand.100">
            <Divider orientation="vertical" bgColor="brand.100" />
          </Center>
          <Box textAlign="center" lineHeight={9}>
            <Text fontSize="5xl">{tanggal}</Text>
            <Text fontSize={24}>{tahun}</Text>
          </Box>
          <Center height="50px" bgColor="brand.100">
            <Divider orientation="vertical" />
          </Center>
          <Text>{bulan}</Text>
        </HStack>
        <Text fontWeight="bold" fontSize="sm">
          {jam}
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
