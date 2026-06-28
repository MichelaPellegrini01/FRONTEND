import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DogList from "./pages/DogList";
import DogDetail from "./pages/DogDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MixedBreed from "./pages/MixedBreed";
import ErrorNotFound from "./pages/ErrorNotFound";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<DogList />} />
        <Route path="/dogs/:id" element={<DogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mixed-breed" element={<MixedBreed />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </>
  );
}

export default App;