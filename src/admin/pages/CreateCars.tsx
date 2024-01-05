import { useEffect, useState } from "react";
import { DrawerCar } from "../components/DrawerCar";
import { db } from "@/firebase";
import { ICar } from "@/types";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CreateCars() {
  const [cars, setCars] = useState<ICar[]>([]);
  const [open, setOpen] = useState(false);

  const deleteCar = async (id: string) => {
    try {
      await deleteDoc(doc(db, "cars", id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cars"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ICar[];
      setCars(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="w-full min-h-screen p-5">
      <div className="max-w-screen-xl mx-auto border-b border-gray/70 flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-black font-poppins">Carro</h1>

        <DrawerCar open={open} setOpen={setOpen} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {cars.map((car) => (
          <Card key={car.id}>
            <div className="w-full h-[300px]">
              <img src={car.images[0]} alt="car" className="w-full h-full" />
            </div>

            <div className="w-full p-4">
              <h1 className="text-2xl font-bold text-black font-poppins">
                {car.brandCar} {car.modelCar}
              </h1>
            </div>

            <div className="w-full p-4 flex items-center justify-between">
              <Button variant="secondary">Editar</Button>
              <Button variant="destructive" onClick={() => deleteCar(car.id)}>
                Excluir
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
