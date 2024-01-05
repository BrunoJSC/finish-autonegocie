import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Footer } from "@/sections/Footer";
import { Link } from "react-router-dom";

import banner from "../assets/banner.png";
import { Feature } from "@/sections/Feature";
import { FAQ } from "@/sections/FAQ";

export function Home() {
  return (
    <section>
      <Header />
      <Banner>
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover -z-50 absolute inset-0"
        />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Encontramos o seu <span className="text-primary">carro ideal!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-normal text-white mt-3">
            Venha ser mais um cliente e faça parte da nossa história
          </p>

          <div className="w-full flex flex-col sm:flex-row gap-4 mt-5 justify-center">
            <Button className="w-full sm:w-1/2 md:w-[200px]" asChild>
              <Link to="/carros">Catálogo</Link>
            </Button>

            <Button
              className="w-full sm:w-1/2 md:w-[200px]"
              variant="secondary"
              asChild
            >
              <Link to="/anunciar">Anuncie</Link>
            </Button>
          </div>
        </div>
      </Banner>
      <main className="max-w-7xl  w-full mx-auto min-h-screen mb-48">
        <Feature />

        <FAQ />
      </main>
      <Footer />
    </section>
  );
}
