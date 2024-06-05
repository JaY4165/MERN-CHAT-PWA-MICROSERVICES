import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import ChatUsersList from "./ChatUsersList";
import { useTheme } from "next-themes";

const ChatUsers = () => {
  const { theme } = useTheme();
  return (
    <section className="p-4">
      <div className="">
        <TextField.Root
          placeholder="Search for chats"
          className="searchButton"
          variant="soft"
          radius="medium"
          color={theme === "dark" ? "gray" : "mint"}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </div>
      <div className="mt-8 overflow-hidden">
        <ChatUsersList />
      </div>
    </section>
  );
};

export default ChatUsers;
