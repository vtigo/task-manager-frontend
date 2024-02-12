import { ReactNode } from "react";
interface IContainerProps {
  children: ReactNode;
  title?: string
}

export default function Card({ children, title }: IContainerProps) {
  return (
    <div className="p-6 rounded-xl shadow-lg bg-zinc-50 dark:bg-content">
      <h3 className="text-lightHi dark:text-darkHi font-bold text-2xl mb-2">{title}</h3>
      {children}
    </div>
  )
}