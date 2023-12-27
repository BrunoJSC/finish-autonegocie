import React, { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Header } from "../components/Header";
import { Footer } from "@/sections/Footer";
import { ICar } from "@/types";
import { Card } from "@/components/ui/card";
import { Filters } from "@/components/Filters";

export function Motorbikes() {
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
          <div className="w-full p-4 flex-1 bg-red-500"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
