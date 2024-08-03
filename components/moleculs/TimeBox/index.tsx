import { SimpleGrid } from "@chakra-ui/react";
import BoxItem from "../../atoms/BoxItem";
import { useCountdown } from "../../hooks/useCountDown";
import dayjs from "dayjs";

export default function TimeBox({ data }: Readonly<{ data: Date }>) {
  const weddingDay = dayjs(data).valueOf();
  const [days, hours, minutes, seconds] = useCountdown(weddingDay);

  return (
    <SimpleGrid minChildWidth="20px" columns={4} spacing={2} my={4}>
      <BoxItem time={days} title="Hari" />
      <BoxItem time={hours} title="Jam" />
      <BoxItem time={minutes} title="Menit" />
      <BoxItem time={seconds} title="Detik" />
    </SimpleGrid>
  );
}
