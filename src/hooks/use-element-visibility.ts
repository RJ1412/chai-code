"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

export function UseElementVisibility(threshold:number = 0.2): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Update state based on whether the element is visible
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        threshold, // Trigger when at least the specified threshold of the element is visible
      },
    )

    // Start observing the element
    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])
         //@ts-ignore
  return [ref, isVisible]
}
