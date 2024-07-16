import React, { useEffect, useState } from "react";
import axios from "axios";
import CardVideoComponent from "../../components/Cards/index";

const Categorias = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Daann26/alura-flix-api/videos/"
        );
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);
  return (
    <div>
      <h1>Categorías</h1>
      <div>
        {videos.map((video) => (
          <CardVideoComponent key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Categorias;
