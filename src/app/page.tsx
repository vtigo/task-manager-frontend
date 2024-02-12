import { Card, Container } from "@/components";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-6">
        <Card title="Task Manager">
          <p className="text-primary">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea est sed, nihil minus
            minima accusantium mollitia, assumenda optio provident quia eos quidem
            laborum!
          </p>
        </Card>

        <Card title="Task Manager">
          <p className="text-primary">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea est sed, nihil minus
            minima accusantium mollitia, assumenda optio provident quia eos quidem
            laborum!
          </p>
        </Card>

        <Card title="Task Manager">
          <p className="text-primary">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea est sed, nihil minus
            minima accusantium mollitia, assumenda optio provident quia eos quidem
            laborum!
          </p>
        </Card>

        <Card title="Task Manager">
          <p className="text-primary">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea est sed, nihil minus
            minima accusantium mollitia, assumenda optio provident quia eos quidem
            laborum!
          </p>
        </Card>
      </div>
    </Container >
  );
}
