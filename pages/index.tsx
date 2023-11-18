import { useDisclosure } from "@chakra-ui/react";
import ModalItem from "../components/moleculs/ModalItem";
import { useEffect, useCallback } from "react";
import MainSection from "../components/organism/MainSection";
import SalamSection from "../components/organism/SalamSection";
import DateSection from "../components/organism/DateSection";
import Navbar from "../components/moleculs/Navbar";
import GallerySection from "../components/organism/GallerySection";
import WishSection from "../components/organism/WishSection";
import FloatNav from "../components/moleculs/Navbar/FloatNav";
import { useInView } from "react-power-ups";
import { getData } from "../services/data";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setData } from "../redux/data.slice";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [ref, isInView] = useInView(false);

  const dispatch = useDispatch();
  const getWeddingData = useCallback(async () => {
    const data = await getData();
    dispatch(setData(data.data));
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
      <FloatNav />
      <ModalItem onClose={onClose} isOpen={isOpen} />
      <div ref={ref}>
        <MainSection />
      </div>
      <SalamSection />
      <DateSection />
      <GallerySection />
      <WishSection />
      <Navbar isShow={!isInView} />
    </>
  );
};

export default Home;
