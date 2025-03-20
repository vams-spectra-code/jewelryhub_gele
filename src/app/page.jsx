import AboutMe from "@/components/AboutMe/AboutMe";
import Collage from "@/components/Collage/Collage";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Collage />
      <FeaturedProducts />
      <AboutMe />
      <Testimonial />
    </div>
  );
}
