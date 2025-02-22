import Collage from "@/components/Collage/Collage";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/Hero/Hero";
import React from "react";

function Home() {
  return (
    <div>
      <Hero />
      <Collage />
      <FeaturedProducts />
    </div>
  );
}

export default Home;
