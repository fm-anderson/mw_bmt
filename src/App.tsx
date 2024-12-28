import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Learn from "./routes/Learn";
import Practice from "./routes/Practice";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="learn" element={<Learn />} />
        <Route path="practice" element={<Practice />} />
      </Routes>
    </>
  );
}

export default App;
