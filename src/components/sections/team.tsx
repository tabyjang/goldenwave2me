"use client"

import { Container } from "@/components/layout"
import { SlideIn } from "@/components/animation"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  name: string
  role: string
  image?: string
  bio: string
}

interface TeamProps {
  title?: string
  subtitle?: string
  members: TeamMember[]
}

export function Team({ title, subtitle, members }: TeamProps) {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <SlideIn direction="up">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {title}
                </h2>
              </SlideIn>
            )}
            {subtitle && (
              <SlideIn direction="up" delay={0.1}>
                <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
              </SlideIn>
            )}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member, index) => (
            <SlideIn key={index} direction="up" delay={0.1 * (index + 1)}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl font-bold text-primary/30">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </SlideIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
