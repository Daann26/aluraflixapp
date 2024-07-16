import styles from "./Footer.module.css";
import logo from "./Logofooter.png";

function PieDePagina() {
  return (
    <footer className={styles.pie}>
      <img src={logo} alt="Logo Alura" />
    </footer>
  );
}

export default PieDePagina;
