import styles from "./Collage.module.css";
import Image from "next/image";
import { images } from "@/helpers/dataStore";

const { collage1, collage2, collage3, collage4, collage5, collage6 } = images;

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
