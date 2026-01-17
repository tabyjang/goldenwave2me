"use client"

import { Check } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScaleIn, AnimatedButton } from "@/components/animation"
import type { PricingPlan } from "@/lib/pricing-data"

interface PricingCardProps {
  plan: PricingPlan
  index?: number
}

export function PricingCard({ plan, index = 0 }: PricingCardProps) {
  return (
    <ScaleIn delay={0.1 * (index + 1)}>
      <Card
        className={`relative h-full transition-all hover:shadow-xl ${
          plan.highlighted
            ? "border-primary shadow-lg scale-105 z-10"
            : "hover:-translate-y-1"
        }`}
      >
        {plan.highlighted && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}

        <CardHeader className="text-center pb-2">
          <h3 className="text-xl font-semibold">{plan.name}</h3>
          <div className="mt-4">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="text-muted-foreground ml-2">/{plan.period}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {plan.description}
          </p>
        </CardHeader>

        <CardContent className="pt-4">
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <AnimatedButton
            className="w-full"
            variant={plan.highlighted ? "default" : "outline"}
          >
            {plan.ctaText}
          </AnimatedButton>
        </CardContent>
      </Card>
    </ScaleIn>
  )
}
