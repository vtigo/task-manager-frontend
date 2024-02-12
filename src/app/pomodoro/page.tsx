import { Container, Timer } from "@/components";

export default function Pomodoro() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <Timer />
      </div>  
    </Container >
  );
}