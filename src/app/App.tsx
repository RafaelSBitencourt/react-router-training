import { Outlet } from "react-router-dom";

import { Navbar } from "../components/navbar";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
