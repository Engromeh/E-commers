import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardProducte from "./Component/CardProducte/CardProducte";
import Navbar from "./Component/Navbar/Navbar";
import Slider from "./Component/Slider/Slider";
import ProudectDetails from "./Component/ProudectDetails/ProudectDetails";
import Aboutus from "./Component/AboutUs/Aboutus";

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
