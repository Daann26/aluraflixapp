import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./logo.png";
import CabeceraLink from "components/CabeceraLink";

function Cabecera() {
  return (
    <header className={styles.cabecera}>
      <Link to="/">
        <section className={styles.logo}>
          <img src={logo} alt="AluraFlix" />
        </section>
      </Link>
      <nav>
        <CabeceraLink url="./">
          <button className={styles.btnHome}>Home</button>
        </CabeceraLink>
        <CabeceraLink url="./NuevoVideo">
          <button className={styles.btnNuevoVideo}>Nuevo Video</button>
        </CabeceraLink>
      </nav>
    </header>
  );
}

export default Cabecera;
