import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Login from "./Login";
import logo from "./logo.svg";
//import "./App.css";
import Portal from "./Portal";
import ListTheater from "./ListTheater";
import CreateTheaters from "./CreateTheaters";
import Seats from "./Seats";
import ListMovies from "./ListMovies";
import CreateMovies from "./CreateMovies";
import "./sb-admin-2.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="list-theater" element={<ListTheater/>} />
          <Route path="create-theaters" element={<CreateTheaters/>} />
          <Route path="seats" element={<Seats/>} />
          <Route path="list-movies/:rId" element={<ListMovies/>} />
          <Route path="create-movies/:rId" element={<CreateMovies/>} />
         
          
</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
