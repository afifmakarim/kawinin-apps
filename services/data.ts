import callApi from "./config";

export const getData = async () => {
  console.log(process.env.NEXT_PUBLIC_API);
  const url = `https://mocki.io/v1/9d8dd1fa-11d4-4dd9-8f4c-6aa595904128`;
  // const url = process.env.NEXT_PUBLIC_API;
  return callApi({
    url,
    method: "GET",
  });
};
