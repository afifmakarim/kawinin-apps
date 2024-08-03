import {
  Heading,
  VStack,
  Text,
  Center,
  Container,
  Img,
} from "@chakra-ui/react";
import React from "react";
import CustomPrimaryButton from "@/components/atoms/Button";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import dynamic from "next/dynamic";
import { useDataStore } from "@/store/data.store";
import dayjs from "dayjs";

const TimeBoxWithNoSSR = dynamic(
  () => import("@/components/moleculs/TimeBox"),
  {
    ssr: false,
  }
);

export default function MainSection() {
  const data = useDataStore((state) => state.data);

  return (
    <Center
      id="home"
      height="100vh"
      sx={{
        backgroundColor: "#F8E1CD",
        backgroundImage: "url('/bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Fade duration={2000}>
        <AttentionSeeker effect="pulse">
          <VStack gap={6}>
            <Img
              boxShadow="2xl"
              borderRadius="full"
              src={data.weddingPhoto}
              alt={data?.title}
              objectFit="cover"
              boxSize={250}
              sizes="50"
              loading="lazy"
            />
            <Heading color="brand.100">{data?.title}</Heading>
            <Container>
              <Text align="center" fontSize="xs">
                Kami akan menikah, <br />
                dan kami ingin Anda menjadi bagian dari hari <br /> istimewa
                kami!
              </Text>
              <TimeBoxWithNoSSR data={data.weddingCeremony.date} />
              <Text
                align="center"
                fontSize="xs"
                color="black"
                fontWeight="bold"
              >
                {dayjs(data.weddingCeremony.date).format("dddd, DD MMMM YYYY")}
              </Text>
            </Container>
            <a href={"#akad"}>
              <CustomPrimaryButton size="sm" title="Save the Date" />
            </a>
          </VStack>
        </AttentionSeeker>
      </Fade>
    </Center>
  );
}
