"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ComponentProps } from "react"

type ButtonProps = ComponentProps<typeof Button>

export function AnimatedButton({ children, ...props }: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="inline-block"
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  )
}
