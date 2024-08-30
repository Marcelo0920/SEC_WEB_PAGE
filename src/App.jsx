import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cookies from "js-cookie";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";

import Home from "./pages/Home";
import Publicaciones from "./pages/Publicaciones";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Miembros from "./pages/Miembros";
import CrearPublicacion from "./pages/CrearPublicacion";
import EditarPublicacion from "./pages/EditarPublicacion";
import Login from "./pages/Login";
import Publicacion from "./pages/Publicacion";
import ProtectedRoute from "./security/ProtectedRoute";

if (Cookies.get("token")) {
  setAuthToken(Cookies.get("token"));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
        <Route path="/publicacion/:id" element={<Publicacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/miembros" element={<Miembros />} />
        <Route
          path="/crearpublicacion"
          element={
            <ProtectedRoute>
              <CrearPublicacion />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editarpublicacion"
          element={
            <ProtectedRoute>
              <EditarPublicacion />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
