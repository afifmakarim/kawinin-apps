import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spacer,
  Text,
  VStack,
  Center,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { FaBookOpen } from "react-icons/fa";
import CustomPrimaryButton from "@/components/atoms/Button";
import { useSearchParams } from "next/navigation";
import { useDataStore } from "@/store/data.store";
import { useMusicStore } from "@/store/music.store";
import { useAudio } from "@/components/hooks/useAudio";

export default function ModalItem({ onClose, isOpen }: any) {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");
  const data = useDataStore((state) => state.data);
  const music = useMusicStore((state) => state);

  const handleOpenInvitation = () => {
    onClose();
    music.setToggleMusic(true);
  };

  useAudio();
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
                      src={data?.weddingPhoto}
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
