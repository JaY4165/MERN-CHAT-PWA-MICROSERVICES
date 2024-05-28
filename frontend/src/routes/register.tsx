import { createFileRoute } from "@tanstack/react-router";
import RegistrationForm from "../components/registerComponents/RegistrationForm";

export const Route = createFileRoute("/register")({
  component: () => <RegistrationForm />,
});
