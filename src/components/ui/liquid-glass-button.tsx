"use client"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        xl: "h-12 px-8 text-base",
        xxl: "h-14 px-10 text-lg"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
)

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}

export function LiquidButton({
  className,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof liquidbuttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn("relative text-white border rounded-full", liquidbuttonVariants({ size, className }))}
      {...props}
      style={{ backdropFilter: 'url("#container-glass")' }}
    >
      <div className="absolute top-0 left-0 z-0 h-full w-full rounded-full 
        shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all" />
      <div className="pointer-events-none z-10">{children ?? "Let's Go"}</div>
      <GlassFilter />
    </Comp>
  )
}

export default LiquidButton
