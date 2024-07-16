import PaginaBase from "pages/PaginaBase";
import NuevoVideo from "pages/NuevoVideo";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categorias from "pages/Categorias";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/NuevoVideo" element={<NuevoVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
