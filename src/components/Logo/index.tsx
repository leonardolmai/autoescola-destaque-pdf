import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.png'

export function Logo({ linkClassName }: { linkClassName?: string }) {
  return (
    <Link href={'/'} className={linkClassName}>
      <Image
        src={logo}
        alt="Autoescola Destaque PDF"
        priority={true}
        className="h-12 w-auto"
      />
      <span className="sr-only">Autoescola Destaque PDF</span>
    </Link>
  )
}
