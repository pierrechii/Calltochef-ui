import React, { forwardRef } from "react"
// @ts-ignore optional
import { motion } from "framer-motion"
import "./liquid-button.vars.css"
import "./liquid-button.css"

type Variant = "primary" | "spectrum" | "ghost"
type Size = "sm" | "md" | "lg"

export interface ButtonLiquidProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  ripple?: boolean
}

const MotionButton: typeof motion.button | "button" = (motion as any)?.button ?? "button"

const motionInteractionProps =
  MotionButton === "button"
    ? {}
    : {
        whileHover: { scale: 1.02, rotate: 0.05 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring", stiffness: 520, damping: 28 },
      }

export function createCtcRipple(event: React.PointerEvent<HTMLElement>) {
  const host = event.currentTarget as HTMLElement
  if (!host) return
  const rect = host.getBoundingClientRect()
  const ripple = document.createElement("span")
  ripple.className = "ctc-btn__ripple"
  ripple.style.left = `${event.clientX - rect.left}px`
  ripple.style.top = `${event.clientY - rect.top}px`
  host.appendChild(ripple)
  ripple.addEventListener(
    "animationend",
    () => {
      ripple.remove()
    },
    { once: true }
  )
}

export const ButtonLiquid = forwardRef<HTMLButtonElement, ButtonLiquidProps>(
  (
    {
      variant = "primary",
      size = "md",
      ripple = false,
      iconLeft,
      iconRight,
      className = "",
      children,
      onPointerDown,
      ...rest
    },
    ref
  ) => {
    const classes = [
      "ctc-btn",
      `ctc-btn--${variant}`,
      `ctc-btn--${size}`,
      ripple ? "ctc-btn--ripple" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")

    const Component: any = MotionButton

    return (
      <Component
        {...motionInteractionProps}
        ref={ref}
        className={classes}
        onPointerDown={(event: React.PointerEvent<HTMLButtonElement>) => {
          onPointerDown?.(event)
          if (!ripple) return
          createCtcRipple(event)
        }}
        {...rest}
      >
        {iconLeft && <span aria-hidden className="ctc-btn__icon">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span aria-hidden className="ctc-btn__icon">{iconRight}</span>}
      </Component>
    )
  }
)

ButtonLiquid.displayName = "ButtonLiquid"

export default ButtonLiquid

