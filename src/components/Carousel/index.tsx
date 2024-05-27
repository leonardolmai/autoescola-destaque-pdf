'use client'

import Autoplay from 'embla-carousel-autoplay'
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as CarouselUI,
} from '@/components/ui/carousel'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import car from '@/assets/car.jpg'
import motorcycle from '@/assets/motorcycle.jpg'
import people from '@/assets/people.jpg'

export function Carousel() {
  const images = [car, motorcycle, people]

  return (
    <CarouselUI
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center py-6">
                  <Image
                    src={image}
                    alt={`${image?.src?.split('/').pop()?.split('.')[0] ?? 'Image'}`}
                    priority={true}
                    className="h-96 w-auto max-sm:h-48"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselUI>
  )
}
