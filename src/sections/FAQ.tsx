import { Summary } from "@/components/Summary";

export function FAQ() {
  return (
    <section>
      <h2 className="text-[38px] text-black font-bold text-center mt-10">
        Perguntas Frequentes sobre a plataforma
      </h2>

      <div className="container mx-auto max-w-[937px] border-b">
        <Summary
          title="1. Quais são os horários de funcionamento da  concessionária?"
          text="Nossos atendentes estão disponíveis 24 horas por dia, 7 dias por semana."
        />

        <Summary
          title="2. Como posso entrar em contato em caso de emergências fora do horário comercial?"
          text="AutoNegocie é uma plataforma de negociação de veículos."
        />

        <Summary
          title="3. Posso agendar um test drive?"
          text="AutoNegocie é uma plataforma de negociação de veículos."
        />

        <Summary
          title="4. Quais são as opções de financiamento disponíveis?"
          text="AutoNegocie é uma plataforma de negociação de veículos."
        />

        <Summary
          title="5. Vocês aceitam trocas?"
          text="AutoNegocie é uma plataforma de negociação de veículos."
        />

        <Summary
          title="6. Quais serviços de pós-venda vocês oferecem?"
          text="AutoNegocie é uma plataforma de negociação de veículos."
        />
      </div>
    </section>
  );
}
