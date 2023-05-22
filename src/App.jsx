import "./App.css";
import "../src/assets/Global.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SwipeableTemporaryDrawer from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
