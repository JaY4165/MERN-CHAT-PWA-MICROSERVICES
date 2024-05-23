import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../components/indexComponents/Hero";

export const Route = createLazyFileRoute("/")({
  component: () => <Hero />,
});
