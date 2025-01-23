import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Dashboard/Pages/Sidebar";
import Navbar from "./Component/Pages/Navbar/Navbar";
 import Aboutus from "./Component/Pages/AboutUs/Aboutus";
 import ProudectDetails from "./Component/Proudectes/ItemsDetelis/ProudectDetails/ProudectDetails";
 import Dashboard from "./Component/Dashboard/Pages/Dashboard";
 import Slider from "./Component/Pages/Slider/Slider";
 import View from "./Component/Dashboard/Operations/View";
import CardProducte from "./Component/Proudectes/ItemsHome/CardProducte/CardProducte";

function App() {
  return (
    <>
      <div className="App">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-10">
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
              <Route path="/proudect/:proudectId" element={<View />} />
              <Route path="/proudect/:proudectId" element={<ProudectDetails />}/>
              <Route path="/about" element={<Aboutus />} />
              <Route path="/Dashbord" element={<Dashboard />}/>

            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
