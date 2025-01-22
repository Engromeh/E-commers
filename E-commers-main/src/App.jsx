import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Slider from "./Component/Slider/Slider";
import Aboutus from "./Component/AboutUs/Aboutus";
import CardProducte from "./Component/Proudectes/CardProducte/CardProducte";
import ProudectDetails from "./Component/Proudectes/ProudectDetails/ProudectDetails";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Slider />
              <CardProducte />
            </>
          }
        />
<Route path="/proudect/:proudectId" element={<ProudectDetails/>} /> 
<Route path="/about" element={<Aboutus/>} /> 


      </Routes>
    </>
  );
}

export default App;
