import { Box, Heading } from "@chakra-ui/react";
import { FaHandHoldingHeart } from "react-icons/fa";
import AkadSection from "./AkadSection";
import { GiBigDiamondRing } from "react-icons/gi";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

export default function DateSection({ data }: any) {
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
          hari={data.weddingCeremony?.dates.day}
          tanggal={data.weddingCeremony?.dates.date}
          tahun={data.weddingCeremony?.dates.year}
          bulan={data.weddingCeremony?.dates.month}
          jam={data.weddingCeremony?.time}
          lokasi={data.weddingCeremony?.addressLocation}
          alamat={data.weddingCeremony?.address}
          mapLocation={data.weddingReception?.mapLocation}
        />
        <AkadSection
          icon={
            <GiBigDiamondRing
              style={{ color: "#7c6e63", fontSize: "2.4rem" }}
            />
          }
          title="Resepsi"
          hari={data.weddingReception?.dates.day}
          tanggal={data.weddingReception?.dates.date}
          tahun={data.weddingReception?.dates.year}
          bulan={data.weddingReception?.dates.month}
          jam={data.weddingReception?.time}
          lokasi={data.weddingReception?.addressLocation}
          alamat={data.weddingReception?.address}
          mapLocation={data.weddingReception?.mapLocation}
        />
      </Fade>
    </Box>
  );
}
