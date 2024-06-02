import { Button, DropdownMenu, Tooltip } from "@radix-ui/themes";
import { cn } from "../../lib/utils";
import Avvvatars from "avvvatars-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const Sidebar = ({ cardColor }: { cardColor: string }) => {
  const [settingsColor, setSettingsColor] = useState<string>("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (cardColor === "bg-[rgba(0,0,0,0.5)]") {
      setSettingsColor("rgba(0,0,0,0.1)");
    } else {
      setSettingsColor("rgba(255,255,255,0.3)");
    }
  }, [cardColor]);

  return (
    <div
      className={cn(
        "col-span-1 w-full flex flex-col items-center justify-between py-4  backdrop-blur-xl border-none brightness-110 rounded-lg",
        cardColor
      )}
    >
      <div className="flex flex-col space-y-10">
        <Tooltip content="Chats">
          <Button variant="ghost" radius="large">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </Button>
        </Tooltip>

        <Tooltip content={theme + " mode"}>
          <Button variant="ghost" radius="large">
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
          </Button>
        </Tooltip>
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="ghost">
            <Avvvatars value="tim@apple.com" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          variant="soft"
          style={{
            backgroundColor: settingsColor,
            backdropFilter: "blur(10px)",
            borderWidth: "0px",
            outlineColor: "transparent",
            outlineWidth: "0px",
            borderColor: "transparent",
          }}
        >
          <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
              <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Item>Share</DropdownMenu.Item>
          <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item color="red" className="flex justify-between">
            Logout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
              />
            </svg>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default Sidebar;