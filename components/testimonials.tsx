"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Golden Spoon Restaurant",
      image: "/professional-woman-restaurant-owner.png",
      rating: 5,
      text: "B&J Professional Cleaning has transformed our restaurant. Their attention to detail and reliability is unmatched. Our health inspection scores have never been better!",
    },
    {
      name: "Michael Chen",
      business: "Accra Medical Center",
      image: "/placeholder-rauas.png",
      rating: 5,
      text: "The medical-grade cleaning standards they maintain are exceptional. Our patients and staff feel confident in the cleanliness of our facility.",
    },
    {
      name: "Akosua Mensah",
      business: "Event Planners Ghana",
      image: "/professional-woman-event-planner.png",
      rating: 5,
      text: "They handle all our event cleanups flawlessly. From small gatherings to large corporate events, B&J delivers consistent quality every time.",
    },
    {
      name: "David Osei",
      business: "Osei Office Complex",
      image: "/professional-building-manager.png",
      rating: 5,
      text: "Professional, punctual, and thorough. Our office building has never looked better. The 20% discount made it even more valuable!",
    },
    {
      name: "Grace Asante",
      business: "Asante Catering Services",
      image: "/catering-business-owner.png",
      rating: 5,
      text: "Their restaurant cleaning service is top-notch. They understand the unique needs of food service businesses and deliver exceptional results.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black font-serif text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-card border-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-accent"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-accent text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-card-foreground mb-4 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].business}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <span className="text-lg">‹</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <span className="text-lg">›</span>
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
