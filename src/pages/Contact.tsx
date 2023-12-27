import { Banner } from "@/components/Banner";
import { Footer } from "@/sections/Footer";
import { Header } from "@/components/Header";
import { FormContact } from "@/forms/FormContact";
import banner2 from "@/assets/banner2.png";

export function Contact() {
  return (
    <>
      <Header />
      <main className="w-full mb-48">
        <Banner>
          <img
            src={banner2}
            alt="Banner"
            className="w-full h-full object-cover -z-50 absolute inset-0"
          />
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Encontramos o seu{" "}
              <span className="text-primary">carro ideal!</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-normal text-white mt-3">
              Venha ser mais um cliente e faça parte da nossa história
            </p>
          </div>
        </Banner>

        <FormContact />
      </main>
      <Footer />
    </>
  );
}
