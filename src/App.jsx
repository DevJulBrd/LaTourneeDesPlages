import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoaderDelay from "./components/LoaderDelay/LoaderDelay";

const Home = lazy(() => import("./pages/Home/Home"));
const Agenda = lazy(() => import("./pages/Agenda/Agenda"));
const Infos = lazy(() => import("./pages/Infos/Infos"));
const Partner = lazy(() => import("./pages/Partner/Partner"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const Shop = lazy(() => import("./pages/Shop/Shop"));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<LoaderDelay />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/infospratiques" element={<Infos />} />
          <Route path="/nospartenaires" element={<Partner />} />
          <Route path="/inscriptions" element={<Registration />} />
          <Route path="/boutique" element={<Shop />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
