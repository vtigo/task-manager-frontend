import { ReactNode } from "react";
interface IContainerProps {
  children: ReactNode;
}
export default function Container({ children }: IContainerProps) {
  return <div className="max-w-7xl md:px-8 px-4 w-full mx-auto ">{children}</div>;
}