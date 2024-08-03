import { Box, Heading } from "@chakra-ui/react";
import { FaHandHoldingHeart } from "react-icons/fa";
import AkadSection from "./AkadSection";
import { GiBigDiamondRing } from "react-icons/gi";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { useDataStore } from "@/store/data.store";
import dayjs from "dayjs";

export default function DateSection() {
  const data = useDataStore((state) => state.data);

  return (
    <Box sx={{ background: "#F8E1CD" }} p={6} id="akad">
      <Fade duration={2000}>
        <AttentionSeeker effect="pulse">
          <Heading textAlign="center" my={8} color="brand.100">
            Save The Date
          </Heading>
        </AttentionSeeker>

        <AkadSection
          icon={
            <FaHandHoldingHeart
              style={{ color: "#7c6e63", fontSize: "2.4rem" }}
            />
          }
          title="Akad Nikah"
          hari={dayjs(data.weddingCeremony?.date).format("dddd")}
          tanggal={dayjs(data.weddingCeremony?.date).format("DD")}
          tahun={dayjs(data.weddingCeremony?.date).format("YYYY")}
          bulan={dayjs(data.weddingCeremony?.date).format("MMMM")}
          jam={dayjs(data.weddingCeremony?.date).format("HH:mm")}
          lokasi={data.weddingCeremony?.addressLocation}
          alamat={data.weddingCeremony?.address}
          mapLocation={data.weddingReception?.addressLocation}
        />
        <AkadSection
          icon={
            <GiBigDiamondRing
              style={{ color: "#7c6e63", fontSize: "2.4rem" }}
            />
          }
          title="Resepsi"
          hari={dayjs(data.weddingReception?.date).format("dddd")}
          tanggal={dayjs(data.weddingReception?.date).format("DD")}
          tahun={dayjs(data.weddingReception?.date).format("YYYY")}
          bulan={dayjs(data.weddingReception?.date).format("MMMM")}
          jam={dayjs(data.weddingReception?.date).format("HH:mm")}
          lokasi={data.weddingReception?.addressLocation}
          alamat={data.weddingReception?.address}
          mapLocation={data.weddingReception?.addressLocation}
        />
      </Fade>
    </Box>
  );
}
