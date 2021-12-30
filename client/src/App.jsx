import ContentDisplay from "@/components/ContentDisplay/index"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";






function App() {

  return (
     <BrowserRouter>
    

      <Routes>
      
      <Route  path="/:ruta"   element={<ContentDisplay/>} />
      <Route path="/"   element={<ContentDisplay/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
