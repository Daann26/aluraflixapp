import styles from "./Inicio.module.css";
import { useVideoDataContext } from "../../context/index";
import CardVideoComponent from "../../components/Cards/index";
import Modal from "../../components/Modal/index";

const colorPorDefectoValue = "#CCCCCC";

const categoriaPorColores = {
  "Front End": "var(--color-front-end)",
  BackEnd: "var(--color-back-end)",
  "Innovacion y Gestion": "var(--color-innovacionygestion)",
};
const IndexPage = () => {
  const { videos } = useVideoDataContext();

  return (
    <div className={styles.indexContainer}>
      {Object.keys(categoriaPorColores).map((categoriaNombre) => (
        <div key={categoriaNombre} className={styles.categorias}>
          <h2
            className={styles.name}
            style={{
              backgroundColor:
                categoriaPorColores[categoriaNombre] || colorPorDefectoValue,
            }}
          >
            {categoriaNombre}
          </h2>
          <div className={styles.videos}>
            {videos
              .filter((video) => video.categoria === categoriaNombre)
              .map((video) => (
                <CardVideoComponent key={video.id} video={video} />
              ))}
          </div>
        </div>
      ))}
      <Modal />
    </div>
  );
};

export default IndexPage;
