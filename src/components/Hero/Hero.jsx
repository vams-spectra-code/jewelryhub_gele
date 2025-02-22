import styles from "./Hero.module.css";
import Image from "next/image";

import heroImg from "@/assets/images/t.essymakeover_1740165253745.jpeg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Discover the Elegance of <span>Jewelry & Gele</span>
        </h1>
        <p className={styles.subtitle}>
          Elevate your style with our exquisite collection of jewelry and
          handcrafted gele.
        </p>
        <a href="#shop" className={styles.cta}>
          Book Now
        </a>
      </div>

      <div className={styles.heroImage}>
        <Image
          src={heroImg}
          alt="Jewelry and Gele"
          width={500}
          height={550}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Hero;
