import { Carousel } from '@/components/Carousel'
import PackageList from '@/components/PackageList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-between p-2">
      <section className="max-w-5xl max-sm:max-w-60 sm:max-w-xl md:max-w-2xl">
        <Carousel />
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Nossos Pacotes
          </h2>
          <PackageList />
        </div>
      </section>
    </main>
  )
}
