import { Box, Flex, Container, useDisclosure } from "@chakra-ui/react";
import { FaQrcode } from "react-icons/fa";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import DrawerItem from "../DrawerItem";
import NavbarItem from "./NavbarItem";
import { useSelector, useDispatch } from "react-redux";
import { toggleMusic } from "../../../redux/music.slice";
import { RootState } from "../../../redux/store";

export default function FloatNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { music, data } = useSelector((state: RootState) => state);

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
