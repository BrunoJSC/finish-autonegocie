/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Firestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { ICar } from "@/types";

interface FilterProps {
  db: Firestore;
  collectionCar: string;
}

export function Filters({ db, collectionCar }: FilterProps) {
  const [filters, setFilters] = useState<{ [key: string]: any }>({});
  const [results, setResults] = useState<any[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      // Construa a consulta com base nos filtros
      const q = query(
        collection(db, collectionCar),
        ...Object.entries(filters).map(([key, value]) =>
          where(key, "==", value)
        )
      );

      // Execute a consulta e atualize os resultados
      const querySnapshot = await getDocs(q);
      const carResults = querySnapshot.docs.map((doc) => doc.data());
      setResults(carResults);
    };

    fetchData();
  }, [db, collectionCar, filters]);
  return (
    <div>
      <Input name="city" onChange={handleChange} />
      <Input name="category" onChange={handleChange} />

      <h2>Resultados:</h2>
      <ul>
        {results.map((car: ICar, index) => (
          <li key={index}>
            {car.brandCar} - {car.modelCar} ({car.yearFabrication})
          </li>
        ))}
      </ul>
    </div>
  );
}
