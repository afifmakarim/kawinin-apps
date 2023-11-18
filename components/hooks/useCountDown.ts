import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

const useCountdown = (targetDate: Dayjs) => {
  const countDownDate = targetDate.valueOf();

  const [countDown, setCountDown] = useState(countDownDate - dayjs().valueOf());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - dayjs().valueOf());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
