import styles from "./FeaturedProducts.module.css";
import Image from "next/image";

import { images } from "@/helpers/dataStore";

const products = [
  { id: 1, name: "Royal Gold Gele", price: "₦15,000", image: images.collage4 },
  {
    id: 2,
    name: "Elegant Silver Earrings",
    price: "₦8,500",
    image: images.collage5,
  },
  { id: 3, name: "Classic Red Gele", price: "₦12,000", image: images.collage6 },
  {
    id: 4,
    name: "Luxury Pearl Necklace",
    price: "₦20,000",
    image: images.collage2,
  },
];

const FeaturedProducts = () => {
  return (
    <section className={styles.featured}>
      <h2 className={styles.title}>Shop Our Exclusive Collection</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={270}
              className={styles.image}
            />
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.price}>{product.price}</p>
            <button className={styles.cta}>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
