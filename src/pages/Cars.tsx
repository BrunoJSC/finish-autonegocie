import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Header } from "../components/Header";
import { Footer } from "@/sections/Footer";
import { ICar } from "@/types";
import { Card } from "@/components/ui/card";
import { Filters } from "@/components/Filters";
import { Link } from "react-router-dom";

export function Cars() {
  const [data, setData] = useState<ICar[]>([]);
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    doors: "",
    accessories: "",
    mileage: "",
    city: "",
    fuel: "",
    color: "",
    direction: "",
    startYear: "",
    endYear: "",
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cars"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ICar[];
      setData(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto min-h-screen p-4 mb-72">
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="w-full md:w-[300px] bg-primary rounded-md p-4 mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-white mb-4">Filtros</h1>
            <Filters db={db} collectionCar="cars" onFilterChange={setData} />
          </Card>
          <div className="w-full p-4 flex-1 flex flex-col space-y-12">
            {data.map((car) => (
              <Link
                to={`/carros/${car.id}`}
                target="_self"
                key={car.id}
                state={{ data: car }}
                rel="noopener noreferrer"
              >
                <div className="w-ful h-56 bg-white flex shadow-md rounded-lg">
                  <div className="w-[250px] h-full">
                    <img
                      src={car.images[0]}
                      width={200}
                      height={200}
                      alt={car.brandCar}
                      className="object-cover w-full h-56 rounded-tl-lg rounded-bl-lg"
                    />
                  </div>

                  <div className="p-4 flex flex-col">
                    <h1 className="text-3xl font-bold text-primary mb-4">
                      {car.brandCar}{" "}
                      <span className="text-black">{car.modelCar}</span>
                    </h1>

                    <p className="text-lg">Ano {car.yearFabrication}</p>
                    <p>KM: {car.km}</p>
                    <p>Tipo de combustível: {car.fuel}</p>
                    <p className="font-bold">Valor: {car.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
