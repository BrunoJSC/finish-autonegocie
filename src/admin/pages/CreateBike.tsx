import { useState } from "react";
import { DrawerBike } from "../components/DrawerBike";

export function CreateBike() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full min-h-screen p-5">
      <div className="max-w-screen-xl mx-auto border-b border-gray/70 flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-black font-poppins">Motos</h1>

        <DrawerBike open={open} setOpen={setOpen} />
      </div>
    </section>
  );
}
