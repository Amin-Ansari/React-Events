//Components and pages
import Header from "../components/Structure/Header/Header";

//React-Router stuff
import { Outlet } from "react-router";

export default function RootPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
