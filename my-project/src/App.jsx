import "./App.css";
import { NavBar } from "./Components/NavBar";
import { AllRoutes } from "./Pages/AllRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <NavBar />
      <AllRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
