import Cabecera from "../../components/Cabecera";
import Banner from "../../components/Banner";
import PieDePagina from "../../components/PieDePagina";
import { Outlet, useLocation } from "react-router-dom";
import { VideoDataProvider } from "../../context/index";

function PaginaBase() {
  const location = useLocation();

  return (
    <VideoDataProvider>
      <main>
        <Cabecera />
        {location.pathname === "/" && <Banner />}
        <Outlet />
        <PieDePagina />
      </main>
    </VideoDataProvider>
  );
}
export default PaginaBase;
