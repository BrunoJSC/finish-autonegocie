import { Header } from "@/components/Header";
import { Footer } from "@/sections/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ICar } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export function CarDetails() {
  const location = useLocation();
  const form = useForm();

  const state = location.state as { data: ICar };
  const car = state?.data;

  useEffect(() => {
    console.log(car.images.length);
  }, [car]);

  return (
    <>
      <Header />
      <section className="w-full min-h-screen p-2 mb-48">
        <div className="p-12 max-w-screen-xl mx-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-screen-lg mx-auto mt-2"
          >
            <CarouselContent>
              {car.images.map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:w-[400px]">
                  <div className="w-full h-[400px]">
                    <img
                      src={car.images[index]}
                      alt="car"
                      className="w-full h-full rounded-xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <Card className="w-full max-w-screen-lg mx-auto mt-2 p-4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              {car.brandCar} <span className="text-black">{car.modelCar}</span>
            </CardTitle>
          </CardHeader>

          <div className="w-full flex justify-between">
            <div className="w-[450px] grid grid-cols-2 gap-10 p-4">
              <div>
                <p className="font-bold">Cidade</p>
                <p className="text-primary">{car.location}</p>
              </div>

              <div>
                <p className="font-bold">Ano</p>
                <p className="text-primary">{car.yearFabrication}</p>
              </div>

              <div>
                <p className="font-bold">Combustível</p>
                <p className="text-primary">{car.fuel}</p>
              </div>

              <div>
                <p className="font-bold">KM</p>
                <p className="text-primary">{car.km}</p>
              </div>

              <div>
                <p className="font-bold">Cambio</p>
                <p className="text-primary">{car.exchange}</p>
              </div>

              <div>
                <p className="font-bold">Cor</p>
                <p className="text-primary">{car.color}</p>
              </div>
            </div>

            <Form {...form}>
              <form className="grid grid-cols-1 gap-4 p-4 bg-black max-w-sm rounded-xl">
                <div>
                  <h2 className="text-2xl font-bold text-primary">
                    Entre em contato com o Vendedor!
                  </h2>
                  <p>Coloque seus dados*</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Label htmlFor="name" className="text-white">
                    Nome
                  </Label>
                  <Input id="name" className="bg-white" />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input id="email" type="email" className="bg-white" />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Label htmlFor="phone" className="text-white">
                    Telefone
                  </Label>
                  <Input id="phone" type="tel" className="bg-white" />
                </div>

                <Button type="submit" className="w-full">
                  Enviar
                </Button>
              </form>
            </Form>
          </div>

          <CardContent className="max-w-xl">
            <CardTitle className="text-2xl font-bold text-primary">
              Sobre o carro
            </CardTitle>
            <p className="text-black">{car.description}</p>
          </CardContent>
        </Card>
      </section>
      <Footer />
    </>
  );
}
