import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { ToDo } from "./components/Todo/ToDo";
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ToDo />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
