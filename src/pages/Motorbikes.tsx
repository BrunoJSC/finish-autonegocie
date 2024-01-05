import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Header } from "../components/Header";
import { Footer } from "@/sections/Footer";
import { IMotorbike } from "@/types";
import { Card } from "@/components/ui/card";
import { Filters } from "@/components/Filters";
import { Link } from "react-router-dom";

export function Motorbikes() {
  const [data, setData] = useState<IMotorbike[]>([]);
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
    const unsubscribe = onSnapshot(collection(db, "motorbikes"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IMotorbike[];
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
            <Filters db={db} collectionCar="motorbikes" />
          </Card>
          <div className="w-full p-4 flex-1">
            <div className="w-full p-4 flex-1 flex flex-col space-y-7">
              {data.map((motorbike) => (
                <Link
                  to={`/motos/${motorbike.id}`}
                  target="_self"
                  key={motorbike.id}
                  state={{ data: motorbike }}
                  rel="noopener noreferrer"
                >
                  <div className="w-ful h-56 bg-white rounded-none flex shadow-md">
                    <div className="w-[250px] h-full">
                      <img
                        src={motorbike.images[0]}
                        width={200}
                        height={200}
                        alt={motorbike.motorbikeBrand}
                        className="object-cover w-full h-56"
                      />
                    </div>

                    <div className="p-4 flex flex-col">
                      <h1 className="text-3xl font-bold text-primary mb-4">
                        {motorbike.motorbikeModel} {motorbike.motorbikeBrand}
                      </h1>

                      <p className="text-lg">Ano {motorbike.yearFabrication}</p>
                      <p>KM: {motorbike.km}</p>
                      <p>Tipo de combustível: {motorbike.fuel}</p>
                      <p className="font-bold">Valor: {motorbike.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
