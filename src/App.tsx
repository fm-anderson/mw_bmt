import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Cards from "./routes/Cards";

function App() {
  return (
    <>
      <div>
        <h1>App</h1>
        <div className="flex gap-8">
          <a href="/">Home</a>
          <a href="cards">Cards</a>
        </div>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="cards" element={<Cards />} />
      </Routes>
    </>
  );
}

export default App;
