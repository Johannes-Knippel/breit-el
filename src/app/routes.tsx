import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/ueber-uns",
    Component: About,
  },
  {
    path: "/leistungen",
    Component: Services,
  },
  {
    path: "/kontakt",
    Component: Contact,
  },
]);
