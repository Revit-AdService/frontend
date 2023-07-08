import { Route, Routes } from "react-router-dom";
import NavBar from "../common/NavBar";
import HomeNavbar from "../components/Navbar/HomeNavbar";

function NavbarRoutes({ check, change }) {
  return (
    <Routes>
      <Route path="/*" element={<NavBar check={check} change={change} />}>
        <Route index element={<HomeNavbar />} />
      </Route>
    </Routes>
  );
}

export default NavbarRoutes;
