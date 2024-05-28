import { Logo } from '@/components/Logo'
import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex flex-col justify-between bg-gray-200 p-6">
      <div className="flex flex-col items-center gap-3 pb-4 lg:flex-row lg:items-start lg:justify-around">
        <div className="text-center lg:text-left">
          <h2 className="pb-2 font-bold">Contato</h2>
          <p className="text-xs">
            <span className="text-sm font-semibold">Telefone:</span> (84)
            99952-7822
          </p>
          <p className="text-xs">
            <span className="text-sm font-semibold">Email:</span>{' '}
            autoescoladestaquepdf@gmail.com
          </p>
        </div>

        <Logo linkClassName="lg:pr-36" />

        <div className="">
          <h2 className="pb-2 text-center font-bold lg:text-left">
            Redes sociais
          </h2>
          <div className="flex justify-center">
            <a href="https://www.instagram.com/autoescoladestaquepdf/">
              <Instagram size={24} color="hsl(var(--primary))" />
            </a>
          </div>
        </div>
      </div>
      <div className="self-center text-center text-xs">
        <span>Copyright © 2024 | Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
