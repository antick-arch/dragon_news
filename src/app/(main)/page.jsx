import LeftSide from "@/componets/homepage/news/LeftSide";
import RightSide from "@/componets/homepage/news/RightSide";
import Image from "next/image";
import { redirect } from "next/navigation";

const defaultCategoryId = "0"
export default function Home() {
  redirect (`/category/${defaultCategoryId}`);
}
