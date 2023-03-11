import { Link, Router } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <div className="row">
        <div className="column" />
        <div className="column">
          <button className="button button-clear">Home</button>
        </div>
        <div className="column" />
        <div className="column">
          <button className="button button-clear">Sobre</button>
        </div>
        <div className="column" />
        <div className="column">
          <button className="button button-clear">Contato</button>
        </div>
      </div>
    </>
  );
}
