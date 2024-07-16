import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const VideoDataContext = React.createContext();

export const useVideoDataContext = () => {
  return useContext(VideoDataContext);
};

export const VideoDataProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Daann26/alura-flix-api/videos"
      );
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // Función para guardar un video editado
  const handleSaveVideo = async (editedVideo) => {
    try {
      const response = await axios.put(
        `https://my-json-server.typicode.com/Daann26/alura-flix-api/videos/${editedVideo.id}, editedVideo`,
        editedVideo
      );
      console.log("Video actualizado:", response.data);

      // Actualizar el video editado en el estado local
      setVideos((prevVideos) => {
        return prevVideos.map((video) => {
          if (video.id === editedVideo.id) {
            return editedVideo;
          }
          return video;
        });
      });

      closeModal();
    } catch (error) {
      console.error("Error updating video:", error);
    }
  };

  const handleAddVideo = async (newVideo) => {
    try {
      const response = await axios.post(
        "https://my-json-server.typicode.com/Daann26/alura-flix-api/videos",
        newVideo
      );
      console.log("Nuevo video agregado:", response.data);

      // Actualizar la lista de videos en el estado global
      setVideos((prevVideos) => [...prevVideos, response.data]);
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  const handleDeleteVideo = async (videoIdentifier) => {
    try {
      await axios.delete(
        `https://my-json-server.typicode.com/Daann26/alura-flix-api/videos/${videoIdentifier}`
      );
      setVideos((prevVideos) =>
        prevVideos.filter((video) => video.id !== videoIdentifier)
      );
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  const videoDataContextValue = {
    videos,
    fetchVideos,
    handleSaveVideo,
    handleAddVideo,
    handleDeleteVideo,
    isModalOpen,
    openModal,
    closeModal,
    selectedVideo,
  };

  return (
    <VideoDataContext.Provider value={videoDataContextValue}>
      {children}
    </VideoDataContext.Provider>
  );
};
