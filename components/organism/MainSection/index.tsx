import {
  Heading,
  VStack,
  Text,
  Center,
  Container,
  Img,
} from "@chakra-ui/react";
import React from "react";
import CustomPrimaryButton from "../../atoms/Button";
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const TimeBoxWithNoSSR = dynamic(() => import("../../moleculs/TimeBox"), {
  ssr: false,
});
const API_IMG = process.env.NEXT_PUBLIC_IMAGES;

export default function MainSection({ data }: any) {
  return (
    <Fade duration={2000}>
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
        <AttentionSeeker effect="pulse">
          <VStack gap={6}>
            <Img
              boxShadow="2xl"
              borderRadius="full"
              src={`${data.weddingPhoto && API_IMG}${data.weddingPhoto}`}
              alt={data?.title}
              objectFit="cover"
              // width={250}
              // height={250}
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
              <TimeBoxWithNoSSR data={data.weddingCeremony.dates.fastTime} />
              <Text
                align="center"
                fontSize="xs"
                color="black"
                fontWeight="bold"
              >
                {data.weddingCeremony?.dates.day},{" "}
                {data.weddingCeremony?.dates.date}{" "}
                {data.weddingCeremony?.dates.month}{" "}
                {data.weddingCeremony?.dates.year}
              </Text>
            </Container>
            <a href={"#akad"}>
              <CustomPrimaryButton size="sm" title="Save the Date" />
            </a>
          </VStack>
        </AttentionSeeker>
      </Center>
    </Fade>
  );
}
