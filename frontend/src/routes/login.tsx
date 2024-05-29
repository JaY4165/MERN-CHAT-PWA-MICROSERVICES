import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "../components/loginComponents/LoginForm";

export const Route = createFileRoute("/login")({
  component: () => <LoginForm />,
});
