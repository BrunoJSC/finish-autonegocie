import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function Dashboard() {
  return (
    <div>
      <Header />
      <section>
        <Outlet />
      </section>
    </div>
  );
}
