import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button, Container, Flex, Heading } from "@radix-ui/themes";
import { Link } from "@tanstack/react-router";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <Container size={{ initial: "1", md: "3" }}>
      <Flex
        justify={"between"}
        align={"center"}
        className="p-2 px-4 mt-10 backdrop-blur-[30px] rounded-full bg-[#e3fffb] dark:bg-[rgba(236,255,252,0.1)] "
      >
        <Link to="/" className="[&.active]:font-bold cursor-pointer">
          <Heading
            as="h4"
            size={{
              initial: "3",
              md: "5",
              xl: "9",
            }}
            color="mint"
          >
            WhisperWaves
          </Heading>
        </Link>{" "}
        <div className="space-x-10 flex items-center">
          <div className="cursor-pointer">
            {theme === "dark" ? (
              <SunIcon
                className="size-5"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            ) : (
              <MoonIcon
                className="size-5"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            )}
          </div>
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
      </Flex>
    </Container>
  );
}

export default Navbar;
