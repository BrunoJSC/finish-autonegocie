import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export function Dashboard() {
  return (
    <div>
      <Header />
      <section className="w-full min-h-screen">
        <Outlet />
      </section>
    </div>
  );
}
