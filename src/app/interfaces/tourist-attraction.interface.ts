import { Image } from "./image.interface";

export interface TouristAttraction {
  id?: number;
  name: string;
  location: string;
  description: string;
  category: string;
  images?: Image[];
}