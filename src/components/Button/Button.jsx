import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ title, variant = "primary", href, onClick }) => {
  if (href) {
    return (
      <Link href={href}>
        <button className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition cursor-pointer">
          <p>{title}</p>
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onclick}
        className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition cursor-pointer"
      >
        <p>{title}</p>
      </button>
    );
  }
};

export default Button;
