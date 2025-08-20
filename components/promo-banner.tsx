"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-accent text-accent-foreground py-2 px-4 text-center relative animate-slide-down">
      <div className="flex items-center justify-center gap-2">
        <span className="font-semibold text-sm md:text-base">🎉 LIMITED TIME: 20% OFF All Cleaning Services!</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-accent-foreground/20"
        >
          <span className="text-sm">✕</span>
        </Button>
      </div>
    </div>
  )
}
