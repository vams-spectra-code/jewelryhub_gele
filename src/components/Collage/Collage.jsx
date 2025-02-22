import styles from "./Collage.module.css";
import Image from "next/image";

import collage1 from "@/assets/images/_austine_019_1740165217085.jpeg";
import collage2 from "@/assets/images/glowzzlin_glaze_1740165329681.jpeg";
import collage3 from "@/assets/images/jewelryhub_gele_1740165534838.jpeg";
import collage4 from "@/assets/images/sarexx_beauty_1740165391718.jpeg";
import collage5 from "@/assets/images/sarexx_beauty_1740165466496.jpeg";
import collage6 from "@/assets/images/sarexx_beauty_1740165622212.jpeg";

const Collage = () => {
  return (
    <section className={styles.collage}>
      <h2 className={styles.title}>Explore Stunning Gele Styles</h2>
      <div className={styles.grid}>
        <Image
          src={collage1}
          alt="Gele Style 1"
          width={300}
          height={300}
          className={styles.image}
        />
        <Image
          src={collage2}
          alt="Gele Style 2"
          width={300}
          height={300}
          className={styles.image}
        />
        <Image
          src={collage3}
          alt="Gele Style 3"
          width={300}
          height={300}
          className={styles.image}
        />
        <Image
          src={collage4}
          alt="Gele Style 4"
          width={300}
          height={300}
          className={styles.image}
        />
        <Image
          src={collage5}
          alt="Gele Style 5"
          width={300}
          height={300}
          className={styles.image}
        />
        <Image
          src={collage6}
          alt="Gele Style 6"
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Collage;
