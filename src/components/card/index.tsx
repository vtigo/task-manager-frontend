import { ReactNode } from "react";
interface IContainerProps {
  children: ReactNode;
  title?: string
}

export default function Card({ children, title }: IContainerProps) {
  return (
    <div className="p-6 rounded-xl shadow-lg bg-card">
      <h3 className="text-[#63E6B1] font-bold text-2xl mb-6">{title}</h3>
      {children}
    </div>
  )
}