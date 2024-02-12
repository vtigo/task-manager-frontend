'use client'
import { useRouter } from "next/navigation";
import { Container } from "..";

const navItems = [
  {
    label: 'home',
    url: '/'
  },
  {
    label: 'projetos',
    url: '/projects'
  },
  {
    label: 'tarefas',
    url: '/tasks'
  },
  {
    label: 'calendário',
    url: '/calendar'
  },
  {
    label: 'pomodoro',
    url: '/pomodoro'
  }
]

export default function Header() {
  const router = useRouter()

  const navigate = (path: string) => {
    router.push(path)
  }

  return (
    <div className=" flex flex-row items-center  w-full h-12 bg-zinc-50 dark:bg-content shadow-lg mb-8">
      <Container>
        <div className="flex flex-row items-center gap-2">
          {navItems.map((r, i) => (<NavItem key={i} label={r.label} url={r.url} navigate={navigate} />))}
        </div>
      </Container>
    </div>
  )
}

const NavItem = ({ label, url, navigate }: { label: string, url: string, navigate: (path: string) => void }) => {
  return (
    <span
      onClick={() => navigate(url)}
      className="cursor-pointer font-bold text-dark dark:text-zinc-50 dark:hover:text-zinc-200 rounded p-1"
    >
      {label}
    </span>
  )
}