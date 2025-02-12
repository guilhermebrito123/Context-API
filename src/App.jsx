import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router";

//pages:
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NaoEncontrado";

//Componentes:
import Navbar from "./Componentes/Navbar";

//Contexto:
import { DataContextProvider } from "./Context/DataContext";
import { ColorContextProvider } from "./Context/ColorContext";

function App() {
  return (
    <div className="pai">
      <ColorContextProvider>
        <DataContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DataContextProvider>
      </ColorContextProvider>
    </div>
  );
}

export default App;
