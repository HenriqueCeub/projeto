import { BrowserRouter, Route, Routes } from "react-router-dom"
import Treinos from "./pages/Treinos"
import EditarTreino from "./pages/EditarTreino"
import CriarTreino from "./pages/CriarTreino"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Treinos />} />
        <Route path="/criar-treino" element={<CriarTreino />} />
        <Route path="/editar-treino/:id" element={<EditarTreino />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App