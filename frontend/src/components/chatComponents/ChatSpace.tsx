import { Box } from "@radix-ui/themes";
import { cn } from "../../lib/utils";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import lightbg from "/images/chatbg5.jpg";
import darkbg from "/images/chatbg3.jpg";

const ChatSpace = () => {
  const [cardColor, setCardColor] = useState<string>("");
  const darkCard = "bg-[rgba(0,0,0,0.5)]";
  const lighthCard = "bg-[rgba(255,255,255,0.3)]";
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      setCardColor(darkCard);
    } else {
      setCardColor(lighthCard);
    }
    console.log(cardColor);
  }, [theme, cardColor]);

  return (
    <div className="relative">
      <img
        src={theme === "dark" ? darkbg : lightbg}
        className={cn(
          "w-full h-[100vh] bg-cover bg-center bg-fixed bg-no-repeat blur-3xl saturate-50 brightness-75  overflow-hidden absolute z-0"
        )}
      />
      <div className="grid p-3 grid-cols-12 w-full gap-3 h-full z-10 fixed">
        <Box
          className={cn(
            "col-span-1 backdrop-blur-xl border-none brightness-110  rounded-lg",
            cardColor
          )}
        ></Box>

        <Box
          className={cn(
            "col-span-3 backdrop-blur-xl border-none brightness-110  rounded-lg",
            cardColor
          )}
        >
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
        </Box>
        <Box
          className={cn(
            "col-span-5 backdrop-blur-xl border-none brightness-110 rounded-lg",
            cardColor
          )}
        ></Box>

        <Box
          className={cn(
            "col-span-3 backdrop-blur-xl border-none brightness-110  rounded-lg",
            cardColor
          )}
        ></Box>
      </div>
    </div>
  );
};

export default ChatSpace;
