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
import { Card, CardContent } from "@/components/ui/card";

export function CarDetails() {
  const location = useLocation();

  const state = location.state as { data: ICar };
  const car = state?.data;

  useEffect(() => {
    console.log(car.images.length);
  }, [car]);

  return (
    <>
      <Header />
      <section className="w-full min-h-screen">
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
                  <div className="w-full h-[400px] bg-red-500">
                    <img
                      src={car.images[index]}
                      alt="car"
                      className="w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="p-12 max-w-screen-xl mx-auto">
          <h1 className="text-2xl font-bold text-black font-poppins">
            {car.brandCar}
          </h1>
        </div>
      </section>
      <Footer />
    </>
  );
}
