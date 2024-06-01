import { createFileRoute } from "@tanstack/react-router";
import ChatSpace from "../components/chatComponents/ChatSpace";

export const Route = createFileRoute("/chat")({
  component: () => <ChatSpace />,
});
