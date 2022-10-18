import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import BoxItem from "../../atoms/BoxItem";
import { useCountdown } from "../../hooks/useCountDown";

export default function TimeBox(props: any) {
  const dates = new Date(props.data).getTime() / 1000.0;
  const weddingDay = parseInt(dates + "000");
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
