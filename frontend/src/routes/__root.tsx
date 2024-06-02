import { createRootRoute } from "@tanstack/react-router";
import RootComponent from "../components/rootComponents/RootComponent";

export const Route = createRootRoute({
  component: () => (
    <>
      <RootComponent />
    </>
  ),
});
