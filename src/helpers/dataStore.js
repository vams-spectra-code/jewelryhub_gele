import collage1 from "@/assets/images/_austine_019_1740165217085.jpeg";
import collage2 from "@/assets/images/glowzzlin_glaze_1740165329681.jpeg";
import collage3 from "@/assets/images/jewelryhub_gele_1740165534838.jpeg";
import collage4 from "@/assets/images/sarexx_beauty_1740165391718.jpeg";
import collage5 from "@/assets/images/sarexx_beauty_1740165466496.jpeg";
import collage6 from "@/assets/images/sarexx_beauty_1740165622212.jpeg";

import userImg1 from "@/assets/images/customers/customer1.jpg";
import userImg2 from "@/assets/images/customers/customer2.jpg";
import userImg3 from "@/assets/images/customers/customer3.jpg";
import userImg4 from "@/assets/images/customers/customer4.jpg";
import userImg5 from "@/assets/images/customers/customer5.jpg";

import ownerImg from "@/assets/images/me.jpg";

import artist1 from "@/assets/images/makeupartist/istockphoto-1.jpg";
import artist2 from "@/assets/images/makeupartist/istockphoto-2.jpg";
import artist3 from "@/assets/images/makeupartist/istockphoto-3.jpg";
import artist4 from "@/assets/images/makeupartist/istockphoto-4.jpg";
import artist5 from "@/assets/images/makeupartist/istockphoto-5.jpg";
import artist6 from "@/assets/images/makeupartist/istockphoto-6.jpg";
import artist7 from "@/assets/images/makeupartist/istockphoto-7.jpg";

import gele1 from "@/assets/images/gelestyle/fan-gele.webp";
import gele2 from "@/assets/images/gelestyle/peacock-gele.webp";
import gele3 from "@/assets/images/gelestyle/infinity-pleat.webp";
import gele4 from "@/assets/images/gelestyle/flower-gele.webp";

import flier from "@/assets/images/flier/training.jpg";

import {
  GiEarrings,
  GiDoubleNecklace,
  GiPearlNecklace,
  GiBracers,
} from "react-icons/gi";
import {
  Briefcase,
  Scissors,
  Diamond,
  Brush,
  GraduationCap,
} from "lucide-react";

export const geleStyle = {
  gele1,
  gele2,
  gele3,
  gele4,
};

export const images = {
  collage1,
  collage2,
  collage3,
  collage4,
  collage5,
  collage6,
};

export const ownerImage = ownerImg;

export const artists = {
  artist1,
  artist2,
  artist3,
  artist4,
  artist5,
  artist6,
  artist7,
};

export const flierImage = flier;

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
    name: "Training",
    icon: <GraduationCap size={40} />,
    description:
      "Master the art of gele styling and makeup with our professional training courses.",
    path: "/ourservices/training",
  },
  {
    id: 2,
    name: "Auto Gele",
    icon: <Scissors size={40} />,
    description:
      "Effortless beauty with our ready-to-wear auto gele styles for any occasion.",
    path: "/ourservices/autogele",
  },
  {
    id: 3,
    name: "Bridal Gele",
    icon: <Diamond size={40} />,
    description:
      "Exquisite gele styling for brides to look stunning on their big day.",
    path: "/ourservices/bridalgele",
  },
  {
    id: 4,
    name: "Gele",
    icon: <Brush size={40} />,
    description: "Traditional and modern gele styles crafted to perfection.",
    path: "/ourservices/gele",
  },
  {
    id: 5,
    name: "Makeup",
    icon: <Briefcase size={40} />,
    description: "Flawless makeup services tailored to enhance your beauty.",
    path: "/ourservices/makeup",
  },
  {
    id: 6,
    name: "Bracelets",
    icon: <GiBracers size={40} />,
    description: "Elegant Bracelets perfect for casual and formal occasions.",
    path: "/ourservices/dress",
  },
  {
    id: 7,
    name: "Ear Ring",
    icon: <GiEarrings size={40} />,
    description:
      "Stylish and elegant earrings to complement your look for any occasion.",
    path: "/ourservices/earring",
  },
  {
    id: 8,
    name: "Neckl Piece",
    icon: <GiDoubleNecklace size={40} />,
    description: "stuning necklaces to add a touch of elegance to your outfit.",
    path: "/ourservices/necklace",
  },
  {
    id: 9,
    name: "Beads",
    icon: <GiPearlNecklace size={40} />,
    description:
      "Beautiful beads and accessories to complete your traditional attire.",
    path: "/ourservices/beads",
  },
];

export const igLink =
  "https://www.instagram.com/jewelryhub_gele/?__coig_challenged=1";

export const contactNo = "+234 909 410 8171";
