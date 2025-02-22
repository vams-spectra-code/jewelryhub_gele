import Collage from "@/components/Collage/Collage";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import React from "react";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Collage />
      <FeaturedProducts />
      <Testimonial />
    </div>
  );
}

export default Home;
