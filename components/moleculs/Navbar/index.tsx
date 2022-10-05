import { Box, Container, Flex, Button } from "@chakra-ui/react";
import React from "react";
import {
  FaCalendarAlt,
  FaHandHoldingHeart,
  FaHeart,
  FaHome,
  FaPeriscope,
  FaPhotoVideo,
} from "react-icons/fa";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
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
        bottom="3"
        // width="430px"
        //left="41.5%"
        left="50%"
        transform="translate(-50%, 0)"
      >
        <Flex gap={2}>
          <NavbarItem icon={<FaHome />} href="#home" />
          {/* <NavbarItem icon={<FaPeriscope />} href="#akad" /> */}
          <NavbarItem icon={<FaCalendarAlt />} href="#akad" />
          <NavbarItem icon={<FaPhotoVideo />} href="#gallery" />
          <NavbarItem icon={<FaHandHoldingHeart />} href="#wish" />
        </Flex>
      </Box>
    </Container>
  );
}
