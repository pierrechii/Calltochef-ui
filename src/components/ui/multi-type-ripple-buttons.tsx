"use client"

import React, { ReactNode, useState, useMemo, MouseEvent, CSSProperties } from "react";

interface RippleState {
  key: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface RippleButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  rippleColor?: string;
  rippleDuration?: number;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  rippleColor = "rgba(0,0,0,0.2)",
  rippleDuration = 600,
}) => {
  const [ripples, setRipples] = useState<RippleState[]>([]);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: RippleState = { key: Date.now(), x, y, size, color: rippleColor };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((current) => current.filter((r) => r.key !== newRipple.key));
    }, rippleDuration);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      createRipple(event);
      if (onClick) onClick(event);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`relative overflow-hidden transition-all ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="absolute rounded-full animate-ping opacity-30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: ripple.color,
            animationDuration: `${rippleDuration}ms`,
          } as CSSProperties}
        />
      ))}
    </button>
  );
};

export { RippleButton };
