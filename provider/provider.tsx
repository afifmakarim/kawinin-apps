"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import customTheme from "../styles/theme";

export default function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}
