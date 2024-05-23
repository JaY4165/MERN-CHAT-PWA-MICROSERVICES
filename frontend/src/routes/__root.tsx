import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../components/shared/Navbar";
import { Container } from "@radix-ui/themes";

export const Route = createRootRoute({
  component: () => (
    <>
      <Container>
        <Navbar />
      </Container>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
