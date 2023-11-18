import { Dispatch, SetStateAction } from "react";

export interface WishPropsTypes {
  name: string;
  pesan: string;
  timestamp: string;
  absensi?: "hadir" | "tidakHadir" | "ragu";
}

export interface WishPaginationTypes {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  tableData: WishPropsTypes[];
  postPerPage: number;
}
