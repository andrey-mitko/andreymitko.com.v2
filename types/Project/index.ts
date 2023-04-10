import { StaticImageData } from "next/image";

export default interface Project {
  title: string;
  subtitle: string;
  image: StaticImageData;
  url: string;
}
