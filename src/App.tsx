import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Learn from "./routes/Learn";
import Listen from "./routes/Listen";
import Practice from "./routes/Practice";
import Resources from "./routes/Resources";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />

      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="listen" element={<Listen />} />
          <Route path="practice" element={<Practice />} />
          <Route path="resources" element={<Resources />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
