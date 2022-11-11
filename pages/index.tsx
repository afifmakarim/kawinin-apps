import type { NextPage } from "next";
import { useDisclosure } from "@chakra-ui/react";
import ModalItem from "../components/moleculs/ModalItem";
import { useEffect, useState, useCallback, useRef } from "react";
import MainSection from "../components/organism/MainSection";
import SalamSection from "../components/organism/SalamSection";
import DateSection from "../components/organism/DateSection";
import Navbar from "../components/moleculs/Navbar";
import GallerySection from "../components/organism/GallerySection";
import WishSection from "../components/organism/WishSection";
import FloatNav from "../components/moleculs/Navbar/FloatNav";
import { useIntersection, useInView } from "react-power-ups";
import { getData } from "../services/data";
import { WeddingTypes } from "../services/data-types";
import Head from "next/head";

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
      photos: "",
    },
    brides: {
      name: "",
      nick: "",
      fatherName: "",
      motherName: "",
      ig: "",
      photos: "",
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
  const [ref, isInView] = useInView(false);

  // const showNav = useIntersection({
  //   onEnter: () => setNavShow(false),
  //   onLeave: () => setNavShow(true),
  // });

  // const showNav = useIntersection({
  //   onIntersect: (isIntersecting) => setNavShow(!navShow),
  // });

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
      <Head>
        <title>Wedding Invitation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Wedding Invitation Website" />
      </Head>
      <FloatNav data={WeddingData} />
      <ModalItem onClose={onClose} isOpen={isOpen} data={WeddingData} />
      <div ref={ref}>
        <MainSection data={WeddingData} />
      </div>
      <SalamSection data={WeddingData} />
      <DateSection data={WeddingData} />
      <GallerySection data={WeddingData} />
      <WishSection />
      {/* <div style={navShow ? { display: "block" } : { display: "none" }}> */}
      <Navbar isShow={!isInView} />
      {/* </div> */}
    </>
  );
};

export default Home;
