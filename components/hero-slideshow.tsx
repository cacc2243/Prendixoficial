"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const slides = [
  {
    src: "/images/hero-naked-gun.jpg",
    alt: "Detetive de terno com arma ao lado de mulher de vestido vermelho",
  },
  {
    src: "/images/hero-rotate-1.jpg",
    alt: "Casal em um quarto luxuoso",
  },
  {
    src: "/images/hero-rotate-3.jpg",
    alt: "Homem entre duas mulheres ao pôr do sol na praia",
  },
]

export function HeroSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src || "/placeholder.svg"}
          alt={slide.alt}
          fill
          priority={i === 0}
          className={`object-cover object-top transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Overlay: topo totalmente limpo, escurece só na base para legibilidade e fusão */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-background/50 to-background" />
    </div>
  )
}
