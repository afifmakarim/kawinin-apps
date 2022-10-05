import type { NextPage } from "next";
import { useDisclosure } from "@chakra-ui/react";
import ModalItem from "../components/moleculs/ModalItem";
import { useEffect, useState, useCallback } from "react";
import MainSection from "../components/organism/MainSection";
import SalamSection from "../components/organism/SalamSection";
import DateSection from "../components/organism/DateSection";
import Navbar from "../components/moleculs/Navbar";
import GallerySection from "../components/organism/GallerySection";
import WishSection from "../components/organism/WishSection";
import FloatNav from "../components/moleculs/Navbar/FloatNav";
import { useIntersection } from "react-power-ups";
import { getData } from "../services/data";
import { WeddingTypes } from "../services/data-types";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [WeddingData, setWeddingData] = useState({
    title: "",
    weddingPhoto: "",
    grooms: {
      name: "",
      nick: "",
      fatherName: "",
      motherName: "",
      ig: "",
      photos: [{ imageUrl: "" }],
    },
    brides: {
      name: "",
      nick: "",
      fatherName: "",
      motherName: "",
      ig: "",
      photos: [{ imageUrl: "" }],
    },
    weddingCeremony: {
      address: "",
      addressLocation: "",
      time: "",
      dates: { day: "", date: "", month: "", year: "" },
    },
    weddingReception: {
      address: "",
      addressLocation: "",
      time: "",
      dates: { day: "", date: "", month: "", year: "" },
    },
    galleries: [{ imageUrl: "" }],
  });

  const [navShow, setNavShow] = useState(false);
  const showNav = useIntersection({
    onEnter: () => setNavShow(false),
    onLeave: () => setNavShow(true),
  });

  const getWeddingData = useCallback(async () => {
    const data = await getData();
    setWeddingData(data.data);
  }, [getData]);

  useEffect(() => {
    getWeddingData();
    onOpen();
  }, []);

  return (
    <>
      <ModalItem onClose={onClose} isOpen={isOpen} data={WeddingData} />
      <div ref={showNav}>
        <MainSection data={WeddingData} />
      </div>
      <SalamSection data={WeddingData} />
      <DateSection data={WeddingData} />
      <GallerySection data={WeddingData} />
      <WishSection />
      <div style={navShow ? { display: "block" } : { display: "none" }}>
        <Navbar />
      </div>
      <FloatNav data={WeddingData} />
    </>
  );
};

export default Home;
