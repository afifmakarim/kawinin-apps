import {
  Center,
  Container,
  Box,
  Text,
  VStack,
  HStack,
  Heading,
  Link,
  Img,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { FaHandHoldingHeart } from "react-icons/fa";
import CustomPrimaryButton from "@/components/atoms/Button";
import { useDataStore } from "@/store/data.store";

export default function SalamSection() {
  const data = useDataStore((state) => state.data);

  return (
    <Box sx={{ background: "#F8E1CD" }} p={6} id="salam">
      <Container
        sx={{ background: "rgba(255, 255, 255, 0.29)" }}
        borderRadius={20}
        py={20}
        boxShadow="lg"
      >
        <Fade duration={2000}>
          <Center>
            <VStack gap={4}>
              <Img
                src="/salam.svg"
                alt="salam"
                width={150}
                height={30}
                loading="lazy"
              />
              <Text fontSize={12} fontFamily="Poly" color="brand.100">
                Assalamu'alaikum Wr. Wb.
              </Text>
              <Text
                align="center"
                fontSize={14}
                fontFamily="Poly"
                color="brand.100"
                fontWeight="bold"
              >
                Dengan memohon rahmat dari ridho Allah <br /> Subhanahu Wa
                Ta'ala, insyaaAllah kami akan <br /> menyelenggarakan acara
                pernikahan
              </Text>
              <HStack gap={2}>
                <VStack>
                  <Img
                    src={data.brides.photo}
                    borderRadius="100%"
                    shadow="xl"
                    width="80px"
                    height="80px"
                    objectFit="cover"
                  />
                  <Heading size="md">{data.brides?.nick}</Heading>
                </VStack>
                <FaHandHoldingHeart
                  style={{ color: "#7c6e63", fontSize: "1.4rem" }}
                />
                <VStack>
                  <Img
                    src={data.grooms.photo}
                    borderRadius="100%"
                    shadow="xl"
                    width="80px"
                    height="80px"
                    objectFit="cover"
                  />
                  <Heading size="md">{data.grooms?.nick}</Heading>
                </VStack>
              </HStack>
              <VStack>
                <Text fontFamily="Rancho" fontSize={28}>
                  {data.brides?.name}
                </Text>
                <Text align="center">
                  Putri dari Bapak {data.brides?.fatherName} <br /> & Ibu{" "}
                  {data.brides?.motherName}
                </Text>
                <Link
                  href={`https://www.instagram.com/${data.brides?.instagram}/`}
                  isExternal
                >
                  <CustomPrimaryButton
                    size="xs"
                    title={`@${data.brides?.instagram}`}
                  />
                </Link>
              </VStack>
              <Heading>&</Heading>
              <VStack>
                <Text fontFamily="Rancho" fontSize={28}>
                  {data.grooms?.name}
                </Text>
                <Text align="center">
                  Putri dari Bapak {data.grooms?.fatherName} <br /> & Ibu{" "}
                  {data.grooms?.motherName}
                </Text>
                <Link
                  href={`https://www.instagram.com/${data.grooms?.instagram}/`}
                  isExternal
                >
                  <CustomPrimaryButton
                    size="xs"
                    title={`@${data.grooms?.instagram}`}
                  />
                </Link>
              </VStack>
            </VStack>
          </Center>
        </Fade>
      </Container>
    </Box>
  );
}
