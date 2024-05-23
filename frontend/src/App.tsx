import { Button } from "@radix-ui/themes";
import { useTheme } from "next-themes";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <h1>Current theme {theme}</h1>
      <Button onClick={() => setTheme("dark")}>dark</Button>
      <Button onClick={() => setTheme("light")}>light</Button>
    </>
  );
}

export default App;
