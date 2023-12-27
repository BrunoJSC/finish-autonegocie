interface CardProps {
  icon?: JSX.Element;
  title: string;
  description: string;
}

export function Box({ icon, title, description }: CardProps) {
  return (
    <div className="md:max-w-[396px] h-[156px]">
      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
        {icon}
      </div>

      <div className="mt-4">
        <h1 className="text-3xl font-bold text-start">{title}</h1>
        <p className="text-start text-[#848484]">{description}</p>
      </div>
    </div>
  );
}
