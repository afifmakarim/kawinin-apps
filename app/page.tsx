"use client";
import React, { useCallback, useEffect } from "react";
import FloatNav from "@/components/moleculs/Navbar/FloatNav";
import ModalItem from "@/components/moleculs/ModalItem";
import MainSection from "@/components/organism/MainSection";
import { getData } from "@/services/data";
import { useDisclosure } from "@chakra-ui/react";
import { useDataStore } from "@/store/data.store";
import SalamSection from "@/components/organism/SalamSection";
import DateSection from "@/components/organism/DateSection";
import GallerySection from "@/components/organism/GallerySection";
import "../styles/globals.css";
import WishSection from "@/components/organism/WishSection";
import { useInView } from "react-power-ups";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Navbar = dynamic(() => import("@/components/moleculs/Navbar"), {
  ssr: false,
});

export default function HomePage() {
  const router = useRouter();
  const [ref, isInView] = useInView(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setData } = useDataStore();

  const getWeddingData = useCallback(async () => {
    try {
      const data = await getData();
      setData(data.data);
    } catch (error) {
      router.push("/404");
    }
  }, [getData]);

  useEffect(() => {
    getWeddingData();
    onOpen();
  }, []);

  return (
    <>
      <FloatNav />
      <ModalItem onClose={onClose} isOpen={isOpen} />
      <div ref={ref}>
        <MainSection />
      </div>
      <SalamSection />
      <DateSection />
      <GallerySection />
      <WishSection />
      {!isInView && <Navbar isShow={!isInView} />}
    </>
  );
}
