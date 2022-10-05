import { Box, Flex, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaQrcode } from "react-icons/fa";
import DrawerItem from "../DrawerItem";
import NavbarItem from "./NavbarItem";

export default function FloatNav({ data }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Flex gap={2}>
          <NavbarItem icon={<FaQrcode />} onClick={onOpen} />
        </Flex>
      </Box>
      <DrawerItem isOpen={isOpen} onClose={onClose} data={data} />
    </Container>
  );
}
