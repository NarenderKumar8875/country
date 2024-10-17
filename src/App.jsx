import { Outlet } from "react-router-dom";
import "./components/Header/Header.css";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
