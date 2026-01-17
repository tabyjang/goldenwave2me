import { LucideIcon } from "lucide-react"

export interface ProcessStep {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

interface ProcessProps {
  title?: string
  subtitle?: string
  steps: ProcessStep[]
}

export function Process({
  title = "협업 프로세스",
  subtitle = "체계적인 4단계 프로세스로 확실한 성과를 만듭니다",
  steps,
}: ProcessProps) {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary text-primary-foreground mb-6 text-2xl font-bold">
                  {step.icon}
                </div>

                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
