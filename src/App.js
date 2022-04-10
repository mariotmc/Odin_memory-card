import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./components/Game";
import Footer from "./components/Footer";
import "./styles/style.css";
import "./styles/tailwind.css";

const App = () => {
  return (
    <div id="top" className="h-full flex flex-col">
      <Header />
      <main className="flex flex-col items-center">
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/Odin_memory-card/" element={<Home />} />
            <Route path="/Odin_memory-card/play" element={<Game />} />
            <Route />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
