import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import car from '@/assets/car.jpg'

export default function Packages({ params }: { params: { slug: string } }) {
  const pkg = {
    slug: params.slug,
    title: 'Categoria AB',
    vehicles: 'Moto e Carro',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non lorem at ipsum hendrerit auctor sit amet sed urna. Vestibulum porta nisl ut nunc ornare, eu porta dolor sodales. In nec orci nec nulla lobortis eleifend. Phasellus aliquam, nunc nec porta porttitor, magna justo suscipit velit, et lobortis mauris mi non diam. Mauris id maximus est. Sed consequat odio eu ante sagittis vulputate. Nunc eget dui vitae mi porttitor semper vitae fringilla odio. Aenean vel eros urna. Phasellus porttitor nulla sapien, fringilla convallis ante fermentum ac. Quisque efficitur aliquam ultricies. Donec tempus id tortor non laoreet. Suspendisse ultrices euismod dignissim.',
    requirements:
      'Ter pelo menos 18 anos de idade, passar em um teste teórico e em um teste prático de condução, fornecer um certificado médico de aptidão, pagar as taxas de licença exigidas.',
    image: car,
    price: 1000,
    deadline: '4 a 6 semanas',
  }

  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-between p-2">
      <section className="lg:py-18 w-full py-6 md:py-12">
        <div className="container grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <Image
            alt={pkg.vehicles}
            className="mx-auto aspect-video h-80 w-96 overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            // height="310"
            src={pkg.image}
            // width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {pkg.title} - {pkg.vehicles}
              </h1>
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                {pkg.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}{' '}
                <span className="text-xs sm:pl-1 md:pl-2">em até 12x</span>
              </div>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {pkg.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href={'/pre-registration'}>Fazer pré-matrícula</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-18 w-full bg-gray-100 py-6 dark:bg-gray-800 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Requisitos para {pkg.vehicles}
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Para {pkg.title}, você deve cumprir os seguintes requisitos:
              </p>
              <p className="pl-6 text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {pkg.requirements}
              </p>
              {/* <ul className="list-disc space-y-2 pl-6 text-gray-500 dark:text-gray-400">
                  <li>Ter pelo menos 18 anos de idade</li>
                  <li>Passar em um teste teórico e em um teste prático de condução</li>
                  <li>Fornecer um certificado médico de aptidão</li>
                  <li>Pagar as taxas de licença exigidas</li>
                </ul> */}
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Todo o processo geralmente leva de {pkg.deadline} para ser
                concluído.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
