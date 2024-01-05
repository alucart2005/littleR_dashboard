import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
<<<<<<< HEAD
      <Route exact path="/" element={Home}/>
=======
      <Route exact path="/" element={<Home/>}/>
>>>>>>> 7-step
    </Routes>
    </BrowserRouter>
  );
}
