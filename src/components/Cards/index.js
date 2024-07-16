import styles from "./Cards.module.css";
import editar from "./editar.png";
import eliminar from "./eliminar.png";
import { useVideoDataContext } from "../../context/index";

const CardVideoComponent = ({ video }) => {
  const { handleDeleteVideo, openModal } = useVideoDataContext();

  const handleDelete = async () => {
    try {
      await handleDeleteVideo(video.id);
    } catch (error) {
      console.error("Error al eliminar video:", error);
    }
  };
  const handleEdit = () => {
    openModal(video); //
  };

  console.log(video);
  return (
    <div className={styles.card}>
      <a href={video.video} target="_blank" rel="noopener noreferrer">
        <img
          className={styles.imgVideo}
          src={video.imagen}
          alt={video.titulo}
        />
      </a>
      <div className={styles.infoContainer}>
        <div className={styles.botones}>
          <button className={styles.btnEliminar} onClick={handleDelete}>
            <img src={eliminar} alt="Eliminar" />
            <h3 className={styles.tituloBtn}>Eliminar</h3>
          </button>
          <button className={styles.btnEditar} onClick={handleEdit}>
            <img src={editar} alt="Editar" />
            <h3 className={styles.tituloBtn}>Editar</h3>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardVideoComponent;
