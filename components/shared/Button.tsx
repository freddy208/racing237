"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className,
  icon,
}: ButtonProps) {
  const baseStyles = "font-bold rounded-full transition-all inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-racing-red text-white hover:bg-racing-gold shadow-lg hover:shadow-xl",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-racing-red",
    ghost: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const Component = href ? "a" : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </Component>
  );
}