import { Box, Flex, Container, useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { FaQrcode } from "react-icons/fa";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { useAudio } from "../../hooks/useAudio";
import DrawerItem from "../DrawerItem";
import NavbarItem from "./NavbarItem";
import { useSelector, useDispatch } from "react-redux";
import { toggleMusic } from "../../../redux/music.slice";

export default function FloatNav({ data }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const music = useSelector((state: any) => state.music);
  const dispatch = useDispatch();

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
        // width="430px"
        // left="41.5%"
        // right="50%"
      >
        <Flex gap={2} flexDirection="column">
          <NavbarItem icon={<FaQrcode />} onClick={onOpen} />
          <NavbarItem
            icon={music.isPlay ? <MdMusicOff /> : <MdMusicNote />}
            onClick={() => dispatch(toggleMusic())}
          />
        </Flex>
      </Box>
      <DrawerItem isOpen={isOpen} onClose={onClose} data={data} />
    </Container>
  );
}
