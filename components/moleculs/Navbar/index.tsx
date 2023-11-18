import { Box, Container, Flex, Fade } from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaHandHoldingHeart,
  FaHome,
  FaPhotoVideo,
} from "react-icons/fa";
import NavbarItem from "./NavbarItem";

export default function Navbar({ isShow }: any) {
  return (
    <Fade in={isShow}>
      <Container transitionDuration="800ms">
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
          bottom="3"
          left="50%"
          transform="translate(-50%, 0)"
        >
          <Flex gap={2}>
            <NavbarItem icon={<FaHome />} href="#home" />
            <NavbarItem icon={<FaCalendarAlt />} href="#akad" />
            <NavbarItem icon={<FaPhotoVideo />} href="#gallery" />
            <NavbarItem icon={<FaHandHoldingHeart />} href="#wish" />
          </Flex>
        </Box>
      </Container>
    </Fade>
  );
}
