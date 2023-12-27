import bgSVG from "@/assets/bg.svg";
import { Card } from "@/components/Card";
import { Footer } from "@/sections/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { finances } from "@/constants";
import { Link } from "react-router-dom";

export function Finance() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen mb-48">
        <section className="w-full min-h-screen p-2">
          <div className="w-full mx-auto relative">
            <div className="max-w-[977px] p-4">
              <h1 className="text-[38px] text-black font-bold text-left mt-10">
                Financiamento
              </h1>
            </div>

            <div className="w-full max-w-[977px] h-auto md:h-[1307px] bg-gradient-to-t from-green-200 to-white mt-10 p-4 mx-auto md:mx-0 flex flex-col items-center justify-center">
              {finances.map((finance) => (
                <Card
                  key={finance.title}
                  title={finance.title}
                  paragraph={finance.paragraph}
                />
              ))}
            </div>

            <Button className="w-full md:w-[342px] h-[50px] mt-10">
              Solicitar Financiamento
            </Button>

            <div className="w-full md:w-[342px] mt-10">
              <h2 className="text-2xl font-bold">Dúvidas?</h2>
              <p className="text-[#848484] text-base mt-4">
                Chame no WhatsApp através do botão abaixo para ser atendido por
                um de nossos especialistas!
              </p>

              <Button
                variant="secondary"
                className="w-full h-[50px] mt-4 font-bold text-primary hover:bg-secondary-foreground hover:text-white duration-300 transition-all"
                asChild
              >
                <Link to="/contato">WhatsApp</Link>
              </Button>
            </div>

            <div className="w-full md:w-[591px] h-[291px] absolute bottom-0 right-0 md:-mr-10 hidden md:block">
              <img src={bgSVG} alt="bg" className="w-full h-full" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
