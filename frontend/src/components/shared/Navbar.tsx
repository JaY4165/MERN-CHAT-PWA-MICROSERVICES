import { Button, Heading } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <div className="p-2 flex justify-between gap-2 pt-5">
      <Link to="/" className="[&.active]:font-bold cursor-pointer">
        <Heading as="h3">WhisperWaves</Heading>
      </Link>{" "}
      <div className="space-x-10 flex items-center">
        <Link to="/register" className="[&.active]:font-bold">
          <Button variant="ghost" size={"3"}>
            SignUp
          </Button>
        </Link>{" "}
        <Link to="/login" className="[&.active]:font-bold">
          <Button variant="surface" size={"3"}>
            Login
          </Button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default Navbar;
