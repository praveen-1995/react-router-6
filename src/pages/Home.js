import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="section">
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default Home;
