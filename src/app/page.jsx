import OwnerCard from "@/components/AboutMe/OwnerCard";
import Collage from "@/components/Collage/Collage";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/JServices/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import React from "react";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Collage />
      <FeaturedProducts />
      <OwnerCard />
      <Testimonial />
    </div>
  );
}

export default Home;
