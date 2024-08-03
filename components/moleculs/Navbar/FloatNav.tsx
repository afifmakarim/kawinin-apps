import { Box, Flex, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaQrcode } from "react-icons/fa";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import DrawerItem from "../DrawerItem";
import NavbarItem from "./NavbarItem";
import { useDataStore } from "../../../store/data.store";
import { useAudio } from "@/components/hooks/useAudio";

export default function FloatNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = useDataStore((state) => state.data);
  const { isPlay, toggle } = useAudio();
  return (
    <Container>
      <Box
        boxShadow="xl"
        p={2}
        bgColor="white"
        border="1px"
        borderColor="gray.200"
        borderRadius={8}
        color="white"
        pos="fixed"
        zIndex={9}
        right="3"
        top="40%"
      >
        <Flex gap={2} flexDirection="column">
          <NavbarItem icon={<FaQrcode color="white" />} onClick={onOpen} />
          <NavbarItem
            icon={
              isPlay ? (
                <MdMusicOff color="white" />
              ) : (
                <MdMusicNote color="white" />
              )
            }
            onClick={toggle}
          />
        </Flex>
      </Box>
      <DrawerItem isOpen={isOpen} onClose={onClose} data={data} />
    </Container>
  );
}
