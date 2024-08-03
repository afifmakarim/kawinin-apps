import axios from "axios";

export const getData = async () => {
  const url = process.env.NEXT_PUBLIC_API as string;
  const data = await axios.get(url);
  return data;
};
