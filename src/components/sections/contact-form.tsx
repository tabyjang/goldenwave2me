"use client"

import { useState, FormEvent } from "react"
import { Container } from "@/components/layout"
import { FadeIn, SlideIn, AnimatedButton } from "@/components/animation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

interface ContactInfo {
  email?: string
  phone?: string
  address?: string
}

interface ContactFormProps {
  title?: string
  subtitle?: string
  contactInfo?: ContactInfo
}

export function ContactForm({
  title,
  subtitle,
  contactInfo,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Temporary: log form data (actual API integration out of scope)
    console.log("Form submitted:", formData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Message sent successfully!")
  }

  return (
    <section className="py-20 lg:py-32">
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {title}
                </h2>
              </FadeIn>
            )}
            {subtitle && (
              <SlideIn direction="up" delay={0.1}>
                <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
              </SlideIn>
            )}
          </div>
        )}

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <SlideIn direction="left" delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your project..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <AnimatedButton
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </AnimatedButton>
              </form>
            </SlideIn>

            {/* Contact Info */}
            {contactInfo && (
              <SlideIn direction="right" delay={0.3}>
                <div className="space-y-8 lg:pl-8">
                  <div>
                    <h3 className="text-xl font-semibold">Get in Touch</h3>
                    <p className="mt-2 text-muted-foreground">
                      We&apos;d love to hear from you. Send us a message and
                      we&apos;ll respond as soon as possible.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.email && (
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="font-medium hover:text-primary"
                          >
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {contactInfo.phone && (
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <a
                            href={`tel:${contactInfo.phone}`}
                            className="font-medium hover:text-primary"
                          >
                            {contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {contactInfo.address && (
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Address
                          </p>
                          <p className="font-medium">{contactInfo.address}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SlideIn>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
