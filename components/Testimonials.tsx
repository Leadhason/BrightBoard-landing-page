'use client'

import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { useCallback } from "react"

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "School Principal",
    image: "/avatars/avatar-1.png",
    content: "This platform has transformed how we manage our school operations. The intuitive interface and comprehensive features have made administrative tasks so much easier."
  },
  {
    name: "Michael Chen",
    role: "Department Head",
    image: "/avatars/avatar-2.png",
    content: "The collaborative features are outstanding. We've seen a significant improvement in communication between teachers and staff since implementing this system."
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    image: "/avatars/avatar-1.png",
    content: "I love how easy it is to track student progress and manage assignments. It's made my teaching workflow much more efficient."
  }
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h4 className="text-pink-500 font-medium mb-4">Testimonials</h4>
          <h2 className="text-3xl font-bold mb-3">Trusted by educators worldwide</h2>
          <p className="text-gray-600">
            See what school administrators and teachers have to say about their experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.name}
                    className="flex-[0_0_100%] min-w-0 pl-4 first:pl-0"
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-md mx-4 border bg-gray-100">
                      <div className="relative mb-8 px-4">
                        <span className="absolute -top-4 left-0 text-6xl text-pink-500">&quot;</span>
                        <blockquote className="text-gray-600 text-center pt-4 px-2">
                          {testimonial.content}
                        </blockquote>
                        <span className="absolute -bottom-4 right-0 text-6xl text-pink-500 leading-none">&quot;</span>
                      </div>

                      <div className="flex items-center gap-4 justify-center">
                        <div className="relative w-12 h-12">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 