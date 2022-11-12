import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Input,
  Textarea,
  Divider,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import CustomPrimaryButton from "../../atoms/Button";
import WishCount from "../../moleculs/WishCount";
import WishListItem from "../../moleculs/WishListItem";
import Paginate from "./Paginate";

interface WishPropsTypes {
  name: string;
  pesan: string;
  timestamp: string;
  absensi?: "hadir" | "tidakHadir" | "ragu";
}

export default function WishSection() {
  const [data, setData] = useState<any>([]);

  const [absensi, setAbsensi] = useState("");
  const [name, setName] = useState("");
  const [pesan, setPesan] = useState("");

  const totalAbsent = () => {
    const tidakHadirTotal = data.filter((item: any) => {
      return item.absensi == "tidakHadir";
    });

    const hadirTotal = data.filter((item: any) => {
      return item.absensi == "hadir";
    });

    const raguTotal = data.filter((item: any) => {
      return item.absensi == "ragu";
    });
    return [tidakHadirTotal.length, hadirTotal.length, raguTotal.length];
  };

  const [tidakHadirTotal, hadirTotal, raguTotal] = totalAbsent();

  // pagination config
  const [number, setNumber] = useState(1);
  const [postPerPage] = useState(3);

  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;

  const wishDataList = data.slice(firstPost, lastPost);

  const onSubmit = () => {
    if (name.length > 0 && pesan.length > 0 && absensi.length > 0) {
      setData((prevState: any) => [
        ...prevState,
        { name, timestamp: new Date().toLocaleString(), pesan, absensi },
      ]);

      //clear the textarea
      setName("");
      setPesan("");
    } else {
      alert("Pesan masih kosong");
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "#F8E1CD",
        backgroundImage: "url('/bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      p={6}
      id="wish"
    >
      <Fade duration={2000}>
        <AttentionSeeker effect="pulse">
          <Heading textAlign="center" my={8} color="brand.100">
            Wishes
          </Heading>
        </AttentionSeeker>
        <Text align="center" fontSize="xs">
          Berikan ucapan terbaik untuk kedua mempelai
        </Text>
        <Container
          sx={{ background: "rgba(255, 255, 255, 0.29)" }}
          borderRadius={20}
          py={4}
          my={8}
          boxShadow="xl"
        >
          <WishCount
            tidakHadirTotal={tidakHadirTotal}
            hadirTotal={hadirTotal}
            raguTotal={raguTotal}
          />
          <Divider borderColor="gray.500" />
          <Stack spacing={3} mt={4}>
            <Select
              placeholder="Konfirmasi Kehadiran"
              onChange={(e) => setAbsensi(e.target.value)}
            >
              <option value="hadir">Hadir</option>
              <option value="tidakHadir">Tidak Hadir</option>
              <option value="ragu">Ragu</option>
            </Select>
            <Input
              placeholder="Nama"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <Textarea
              placeholder="Pesan"
              value={pesan}
              required
              onChange={(e) => setPesan(e.target.value)}
            />
            <CustomPrimaryButton size="sm" title="Submit" onClick={onSubmit} />
          </Stack>
          <Divider borderColor="gray.500" my={4} />
          {wishDataList.map((item: WishPropsTypes, idx: any) => (
            <WishListItem
              key={idx}
              name={item.name}
              timestamp={item.timestamp}
              pesan={item.pesan}
            />
          ))}
          <Paginate
            number={number}
            setNumber={setNumber}
            postPerPage={postPerPage}
            tableData={data}
          />
        </Container>
      </Fade>
    </Box>
  );
}
