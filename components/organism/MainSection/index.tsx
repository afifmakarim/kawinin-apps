import {
  Heading,
  VStack,
  Image,
  Text,
  Center,
  Container,
} from "@chakra-ui/react";
import React from "react";
import CustomPrimaryButton from "../../atoms/Button";
import TimeBox from "../../moleculs/TimeBox";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import dynamic from "next/dynamic";
import Link from "next/link";

const TimeBoxWithNoSSR = dynamic(() => import("../../moleculs/TimeBox"), {
  ssr: false,
});

export default function MainSection({ data }: any) {
  return (
    <Center
      id="home"
      height="100vh"
      sx={{
        "background-color": "#F8E1CD",
        "background-image": "url('/bg.svg')",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
      }}
    >
      <Fade>
        <AttentionSeeker effect="pulse">
          <VStack gap={6}>
            <Image
              boxShadow="2xl"
              borderRadius="full"
              src={`${process.env.NEXT_PUBLIC_IMAGES}${data?.weddingPhoto}`}
              alt={data?.title}
              w={250}
              h={250}
            />
            <Heading color="brand.100">{data?.title}</Heading>
            <Container>
              <Text align="center" fontSize="xs">
                Kami akan menikah, <br />
                dan kami ingin Anda menjadi bagian dari hari <br /> istimewa
                kami!
              </Text>
              <TimeBoxWithNoSSR />
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
            <Link href={"#akad"}>
              <CustomPrimaryButton size="sm" title="Save the Date" />
            </Link>
          </VStack>
        </AttentionSeeker>
      </Fade>
    </Center>
  );
}
