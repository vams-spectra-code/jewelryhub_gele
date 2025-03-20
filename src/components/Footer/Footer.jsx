import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import styles from "./Footer.module.css";
import { contactNo, igLink } from "@/helpers/dataStore";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: About Us */}
        <div className={styles.column}>
          <h3 className={styles.heading}>About Us</h3>
          <p>
            JewelryGeleHub is your one-stop destination for stunning gele
            styles, bridal headwraps, and expert gele training.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.links}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/trainings">Trainings</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Contact Us</h3>
          <p>
            <Mail size={18} className={styles.icon} />{" "}
            support@jewelrygelehub.com
          </p>
          <p>
            <Phone size={18} className={styles.icon} /> {contactNo}
          </p>
          <p>
            <MapPin size={18} className={styles.icon} /> Zaria, Nigeria
          </p>
        </div>

        {/* Column 4: Social Media */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank">
              <Facebook size={20} />
            </a>
            <a href={igLink} target="_blank">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Column 5: Newsletter */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Newsletter</h3>
          <form className={styles.newsletter}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} JewelryGeleHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
