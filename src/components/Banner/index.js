import styles from "./Banner.module.css";
import card from "./player.png";

function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.contLeft}>
        <h1 className={styles.titulo}>Challenge React</h1>
        <p className={styles.parrafo}>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div className={styles.card}>
        <a href="https://youtu.be/C_wBJGhauMY" target="__blank">
          <img src={card} alt="¿Que significa pensar como programador?" />
        </a>
      </div>
    </section>
  );
}
export default Banner;
