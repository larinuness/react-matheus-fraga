import { Outlet } from "react-router-dom";
import { Header } from "../header";

export function Layout() {
  return (
    <>
      <Header />
      {/* Renderiza todos o filhos do Layout */}
      <Outlet />
    </>
  );
}
