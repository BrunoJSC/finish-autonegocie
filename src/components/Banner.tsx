import { ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
}

export function Banner({ children }: BannerProps) {
  return (
    <section className="container h-[691px] flex flex-col justify-center items-center relative">
      {children}
    </section>
  );
}
