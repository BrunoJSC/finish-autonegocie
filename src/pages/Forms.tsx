import { Footer } from "@/sections/Footer";
import { Header } from "@/components/Header";
import { FormCar } from "@/forms/FormCar";
import { FormMotorbike } from "@/forms/FormMotorbike";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export function Forms() {
  return (
    <>
      <Header />

      <section className="w-full min-h-screen mx-auto flex flex-col items-center justify-center mb-48">
        <Tabs defaultValue="car" className="md:max-w-[800px] w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#F5F5F5] ">
            <TabsTrigger
              value="car"
              className="font-bold text-xl text-primary "
            >
              Carro
            </TabsTrigger>
            <TabsTrigger
              value="motorbike"
              className="font-bold text-xl text-primary"
            >
              Moto
            </TabsTrigger>
          </TabsList>
          <TabsContent value="car">
            <FormCar />
          </TabsContent>
          <TabsContent value="motorbike">
            <FormMotorbike />
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </>
  );
}
