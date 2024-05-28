'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet'
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from '@/components/ui/navigation-menu'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 shadow md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <Menu />
            <span className="sr-only">Alternar menu de navegação</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Logo />
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href={'/signup'}
            >
              Cadastrar
            </Link>
            <Button asChild>
              <Link href={'/login'}>Entrar</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <Logo linkClassName="m-auto lg:m-0 lg:flex" />
      <NavigationMenu className="ml-auto hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href={'/signup'}
            >
              Cadastrar
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Button asChild>
              <Link href={'/login'}>Entrar</Link>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
