import styles from "./Button.module.css";

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
