import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Cards from "./routes/Cards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="cards" element={<Cards />} />
      </Routes>
    </>
  );
}

export default App;
