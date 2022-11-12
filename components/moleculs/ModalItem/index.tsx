import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Spacer,
  Text,
  VStack,
  Container,
  Center,
  Image,
  Box,
  Stack,
  Heading,
  Img,
  chakra,
} from "@chakra-ui/react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { FaBookOpen } from "react-icons/fa";
import CustomPrimaryButton from "../../atoms/Button";
import { useRouter } from "next/router";
// import Image from "next/image";
import { useAudio } from "../../hooks/useAudio";
import { toggleMusic } from "../../../redux/music.slice";
import { useDispatch } from "react-redux";

export default function ModalItem({ onClose, isOpen, data }: any) {
  const router = useRouter();
  const { to } = router.query;
  const dispatch = useDispatch();
  const [] = useAudio();

  const handleOpenInvitation = () => {
    onClose();
    dispatch(toggleMusic());
  };

  const loader =
    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  return (
    <Modal onClose={onClose} size="sm" isOpen={isOpen}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent w="430px" m={0} h="100vh">
        <ModalBody
          py={0}
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
              <Center h="100vh" color="brand.100">
                <VStack gap={6}>
                  <Heading as="h2" size="lg">
                    The Wedding of
                  </Heading>
                  <Stack direction="column" gap={4}>
                    <Image
                      boxShadow="2xl"
                      borderRadius="full"
                      objectFit="cover"
                      src={`${
                        data.weddingPhoto && process.env.NEXT_PUBLIC_IMAGES
                      }${data.weddingPhoto}`}
                      alt={data?.title}
                      fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                      boxSize={300}
                      w={300}
                      h={300}
                      sizes="50"
                      loading="lazy"
                    />
                    <Center>
                      <Heading as="h2" size="lg">
                        {data?.title}
                      </Heading>
                    </Center>
                    <Center>
                      <VStack>
                        <Text fontSize="xs" align="center">
                          Kepada Yth.
                          <br />
                          Bpk/Ibu/Saudara/i
                          <br />
                        </Text>
                        <Text fontSize="xl" fontWeight={600}>
                          {to}
                        </Text>
                        <Text fontSize="xs" align="center">
                          di Tempat
                        </Text>
                      </VStack>
                    </Center>
                  </Stack>
                  <Spacer />
                  <CustomPrimaryButton
                    icon={<FaBookOpen />}
                    title="Buka Undangan"
                    onClick={handleOpenInvitation}
                    size="md"
                  />
                </VStack>
              </Center>
            </AttentionSeeker>
          </Fade>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
