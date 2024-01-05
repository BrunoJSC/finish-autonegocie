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
  onFilterChange: (filteredData: ICar[]) => void;
}

export function Filters({ db, collectionCar, onFilterChange }: FilterProps) {
  const [filters, setFilters] = useState<{ [key: string]: any }>({});
  const [results, setResults] = useState<ICar[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    setLoading(true);

    // Construa a consulta com base nos filtros
    let q = collection(db, collectionCar);

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "") {
        q = query(q, where(key, "==", value));
      }
    });

    try {
      // Execute a consulta e atualize os resultados
      const querySnapshot = await getDocs(q);
      const carResults = querySnapshot.docs.map((doc) => doc.data()) as ICar[];
      console.log("Resultados da consulta:", carResults);
      setResults(carResults);
      onFilterChange(carResults);
    } catch (error) {
      console.error("Erro ao executar a consulta:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        fetchData();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [fetchData]);

  return (
    <div className="flex flex-col space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <Input name="brandCar" onChange={handleChange} />
        <Input name="modelCar" onChange={handleChange} />
        <Input name="fuel" onChange={handleChange} />
        <Input name="yearFabrication" onChange={handleChange} />
        <Input name="yearModification" onChange={handleChange} />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
}
