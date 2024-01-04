import { useEffect, useState } from "react";
import { DrawerCar } from "../components/DrawerCar";

export function CreateCars() {
  const [cars, setCars] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <section className="w-full min-h-screen p-5">
        <div className="max-w-screen-xl mx-auto border-b border-gray/70 flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-black font-poppins">Carro</h1>

          <DrawerCar open={open} setOpen={setOpen} />
        </div>
      </section>
    </>
  );
}
