import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Dashboard/Pages/Sidebar";
import Navbar from "./Component/Pages/Navbar/Navbar";
import Aboutus from "./Component/Pages/AboutUs/Aboutus";
import ProudectDetails from "./Component/Proudectes/ItemsDetelis/ProudectDetails/ProudectDetails";
import Dashboard from "./Component/Dashboard/Pages/Dashboard";
import Slider from "./Component/Pages/Slider/Slider";
import View from "./Component/Dashboard/Operations/View";
import CardProducte from "./Component/Proudectes/ItemsHome/CardProducte/CardProducte";
import Add from "./Component/Dashboard/Operations/Add";
import Edit from "./Component/Dashboard/Operations/Edit";
import Login from "./Component/Pages/Login/Login";

function App() {
  const location = useLocation(); 

  return (
    <div className="App">
      <div className="row">
        {location.pathname !== "/" && (
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
        )}

        <div className={location.pathname === "/" ? "col-12" : "col-10"}>
          <Routes>
            <Route path="/Add" element={<Add />} />
            <Route path="/Dashbord" element={<Dashboard />} />
            <Route path="/proudect/:proudectId" element={<View />} />
            <Route path="/proudect/:proudectId" element={<ProudectDetails />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/proudect/:proudectId" element={<Edit />} />
            <Route path="/" element={<Login />} />

            <Route
              path="/Home"
              element={
                <>
                  <Navbar />
                  <Slider />
                  <CardProducte />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
