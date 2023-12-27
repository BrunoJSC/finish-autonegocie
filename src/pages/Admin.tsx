import { Footer } from "@/sections/Footer";
import { Header } from "@/components/Header";
import { FormAdmin } from "@/forms/FormAdmin";

export function Admin() {
  return (
    <>
      <Header />
      <main>
        <FormAdmin />
      </main>
      <Footer />
    </>
  );
}
