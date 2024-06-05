import { Outlet, useLocation } from "@tanstack/react-router";
import Navbar from "../shared/Navbar";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect, useState } from "react";

const RootComponent = () => {
  const match = useLocation();
  const [chatPathMatched, setChatPathMatched] = useState<boolean>(false);

  useEffect(() => {
    if (match.pathname.includes("/chat")) {
      setChatPathMatched(true);
    } else {
      setChatPathMatched(false);
    }
  }, [match]);

  return (
    <>
      {chatPathMatched === false ? <Navbar /> : null}
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  );
};

export default RootComponent;
