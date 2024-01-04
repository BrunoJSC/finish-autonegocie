import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Header } from "../components/Header";
import { Footer } from "@/sections/Footer";
import { ICar } from "@/types";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Filters } from "@/components/Filters";
import { Link, useNavigate } from "react-router-dom";

export function Cars() {
  const navigate = useNavigate();
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
            <Filters db={db} collectionCar="cars" />
          </Card>
          <div className="w-full p-4 flex-1 flex flex-col space-y-7">
            {data.map((car) => (
              <Link
                to={`/carros/${car.id}`}
                target="_self"
                key={car.id}
                state={{ data: car }}
                rel="noopener noreferrer"
              >
                <div className="w-ful h-56 bg-white rounded-none flex shadow-md">
                  <div className="w-[250px] h-full">
                    <img
                      src={car.images[0]}
                      width={200}
                      height={200}
                      alt={car.brandCar}
                      className="object-cover w-full h-56"
                    />
                  </div>

                  <div className="p-4 flex flex-col">
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          {car.brandCar} {car.modelCar}
                        </CardTitle>
                      </CardHeader>
                    </Card>
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
