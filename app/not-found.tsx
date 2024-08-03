import { Box, Center, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <Center
      height="100vh"
      bg="#F8E1CD"
      backgroundImage="url('/bg.svg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box rounded="lg" p={8} textAlign="center">
          <Heading as="h1" size="4xl" fontWeight="bold" mb={4}>
            404
          </Heading>
          <Text color="gray.600">
            Oops! The page you are looking for could not be found or in
            maintenance mode
          </Text>
          <Link
            as={NextLink}
            href="/"
            mt={4}
            display="inline-block"
            rounded="md"
            bg="blue.500"
            px={4}
            py={2}
            fontWeight="semibold"
            color="white"
            _hover={{ bg: "blue.600" }}
          >
            Retry
          </Link>
        </Box>
      </Box>
    </Center>
  );
}
