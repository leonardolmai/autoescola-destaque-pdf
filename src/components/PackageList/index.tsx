import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import car from '@/assets/car.jpg'
import motorcycle from '@/assets/motorcycle.jpg'
import people from '@/assets/people.jpg'

export default function PackageList() {
  const packages = [
    {
      slug: 'categoria-a',
      title: 'Categoria A',
      description: 'Moto',
      image: car,
    },
    {
      slug: 'categoria-b',
      title: 'Categoria B',
      description: 'Carro',
      image: motorcycle,
    },
    {
      slug: 'categoria-ab',
      title: 'Categoria AB',
      description: 'Moto e Carro',
      image: people,
    },
  ]

  return (
    <div className="center flex flex-wrap justify-center justify-items-center gap-4">
      {packages.map((pkg, index) => (
        <Link href={`/packages/${pkg.slug}`} key={index}>
          <Card className="rounded-lg bg-white p-4 shadow-md transition-all hover:scale-105 hover:shadow-lg">
            <CardContent className="flex flex-col items-center">
              <Image
                alt={pkg.description}
                className="h-32 w-32"
                src={pkg.image}
                style={{
                  aspectRatio: '120/120',
                  objectFit: 'cover',
                }}
              />
              <div className="mt-4">
                <CardTitle className="pb-2">{pkg.title}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <div className="inline-flex items-center text-blue-600 hover:text-blue-800">
                Saiba Mais
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
