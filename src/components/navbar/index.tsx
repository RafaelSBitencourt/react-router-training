import { Link } from "react-router-dom";

import { Button } from "../button";
import "./style.css";

export function Navbar() {
  return (
    <div className="navbar">
      <Link to={`/`}>
        <Button type="primary" label="Home" />
      </Link>

      <Link to={`/sobre`}>
        <Button type="outline" label="Sobre" />
      </Link>

      <Link to={`/contato`}>
        <Button type="ghost" label="Contato" />
      </Link>
    </div>
  );
}
