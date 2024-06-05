import { Box } from "@radix-ui/themes";
import { cn } from "../../lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import lightbg from "/images/chatbg-6.jpg";
import darkbg from "/images/chatbg3.jpg";
import Sidebar from "./Sidebar";
import ChatUsers from "./ChatUsers";
import UserChat from "./UserChat";

const ChatSpace = () => {
  const [cardColor, setCardColor] = useState<string>("");
  const darkCard = "bg-[rgba(0,0,0,0.5)]";
  const lighthCard = "bg-[rgba(255,255,255,0.3)]";
  const { theme } = useTheme();

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
        loading="eager"
        alt="Chat background"
        className={cn(
          "w-full h-[100vh] bg-cover bg-center bg-fixed bg-no-repeat blur-3xl saturate-100 brightness-75  overflow-hidden absolute z-0"
        )}
      />
      <div className="grid p-3 grid-cols-12 gap-3 w-full z-10 fixed ">
        <Box asChild maxHeight={"96vh"}>
          <Sidebar cardColor={cardColor} />
        </Box>

        <Box
          className={cn(
            "col-span-3 backdrop-blur-xl border-none brightness-110  rounded-lg",
            cardColor
          )}
          maxHeight={"96vh"}
        >
          <ChatUsers />
        </Box>
        <Box
          maxHeight={"96vh"}
          className={cn(
            "col-span-5 backdrop-blur-xl border-none brightness-110 rounded-lg",
            cardColor
          )}
        >
          <UserChat />
        </Box>

        <Box
          maxHeight={"96vh"}
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
