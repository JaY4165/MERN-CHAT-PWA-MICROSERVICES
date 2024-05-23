import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <div className="p-2 flex justify-between gap-2">
      <Link to="/" className="[&.active]:font-bold">
        WhisperWaves
      </Link>{" "}
      <div>
        <Link to="/register" className="[&.active]:font-bold">
          Register
        </Link>{" "}
        <Link to="/login" className="[&.active]:font-bold">
          Login
        </Link>{" "}
      </div>
    </div>
  );
}

export default Navbar;
