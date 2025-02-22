import collage1 from "@/assets/images/_austine_019_1740165217085.jpeg";
import collage2 from "@/assets/images/glowzzlin_glaze_1740165329681.jpeg";
import collage3 from "@/assets/images/jewelryhub_gele_1740165534838.jpeg";
import collage4 from "@/assets/images/sarexx_beauty_1740165391718.jpeg";
import collage5 from "@/assets/images/sarexx_beauty_1740165466496.jpeg";
import collage6 from "@/assets/images/sarexx_beauty_1740165622212.jpeg";

import userImg1 from "@/assets/images/customer1.jpg";
import userImg2 from "@/assets/images/customer2.jpg";
import userImg3 from "@/assets/images/customer3.jpg";
import userImg4 from "@/assets/images/customer4.jpg";
import userImg5 from "@/assets/images/customer5.jpg";
import ownerImg from "@/assets/images/me.jpg";

import { CheckCircle, GraduationCap, Scissors, Sparkles } from "lucide-react";

export const images = {
  collage1,
  collage2,
  collage3,
  collage4,
  collage5,
  collage6,
};

export const ownerImage = ownerImg;

export const imagesArr = Object.values(images);

export const testimonials = [
  {
    id: 1,
    name: "Aisha Bello",
    review:
      "Absolutely love my gele! The quality is top-notch, and it fits perfectly. I’ll definitely order again.",
    image: userImg2,
  },
  {
    id: 2,
    name: "Chidi Okafor",
    review:
      "Great service! The jewelry set I got was elegant and well-packaged. 100% recommended!",
    image: userImg1,
  },
  {
    id: 3,
    name: "Fatima Yusuf",
    review:
      "Stunning gele collection! I got so many compliments at the wedding. Fast delivery too!",
    image: userImg3,
  },
];

export const services = [
  {
    id: 1,
    title: "Brides",
    description: "Elegant gele styles and headwraps for your big day.",
    icon: <Sparkles size={40} color="#b89430" />,
  },
  {
    id: 2,
    title: "Auto Gele",
    description: "Pre-styled gele that’s easy to wear anytime.",
    icon: <CheckCircle size={40} color="#b89430" />,
  },
  {
    id: 3,
    title: "Trainings",
    description: "Master gele tying with our expert-led classes.",
    icon: <GraduationCap size={40} color="#b89430" />,
  },
  {
    id: 4,
    title: "Gele",
    description: "A wide range of beautifully crafted gele for any occasion.",
    icon: <Scissors size={40} color="#b89430" />,
  },
];

export const igLink =
  "https://www.instagram.com/jewelryhub_gele/?__coig_challenged=1";

export const contactNo = "+234 909 410 8171";
