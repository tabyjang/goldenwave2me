import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Container } from "@/components/layout/container"

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "full"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    size: "default",
    children: (
      <div className="bg-muted p-8 text-center">
        <p>Default container (max-w-screen-xl)</p>
        <p className="text-sm text-muted-foreground">
          Responsive padding on all sides
        </p>
      </div>
    ),
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: (
      <div className="bg-muted p-8 text-center">
        <p>Small container (max-w-screen-sm)</p>
        <p className="text-sm text-muted-foreground">
          Great for focused content like forms
        </p>
      </div>
    ),
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: (
      <div className="bg-muted p-8 text-center">
        <p>Large container (max-w-screen-2xl)</p>
        <p className="text-sm text-muted-foreground">
          Extra wide for dashboards and data-heavy pages
        </p>
      </div>
    ),
  },
}

export const Full: Story = {
  args: {
    size: "full",
    children: (
      <div className="bg-muted p-8 text-center">
        <p>Full width container (no max-width)</p>
        <p className="text-sm text-muted-foreground">
          Spans the entire viewport width
        </p>
      </div>
    ),
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 py-8">
      <Container size="sm">
        <div className="bg-blue-100 p-4 text-center dark:bg-blue-900">
          Small (sm)
        </div>
      </Container>
      <Container size="default">
        <div className="bg-green-100 p-4 text-center dark:bg-green-900">
          Default
        </div>
      </Container>
      <Container size="lg">
        <div className="bg-yellow-100 p-4 text-center dark:bg-yellow-900">
          Large (lg)
        </div>
      </Container>
      <Container size="full">
        <div className="bg-red-100 p-4 text-center dark:bg-red-900">
          Full Width
        </div>
      </Container>
    </div>
  ),
}

export const NestedContainers: Story = {
  render: () => (
    <Container size="lg" className="py-8">
      <div className="space-y-4">
        <div className="bg-muted p-4">
          <p className="mb-2 font-semibold">Outer: Large Container</p>
          <Container size="default">
            <div className="bg-card p-4 shadow">
              <p className="mb-2 font-semibold">Inner: Default Container</p>
              <Container size="sm">
                <div className="bg-primary/10 p-4">
                  <p className="font-semibold">Innermost: Small Container</p>
                  <p className="text-sm text-muted-foreground">
                    Nested containers for complex layouts
                  </p>
                </div>
              </Container>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  ),
}

export const PageLayout: Story = {
  render: () => (
    <div className="min-h-screen">
      {/* Header - Full width background, contained content */}
      <header className="border-b bg-card">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <span className="font-bold">Logo</span>
            <nav className="flex gap-4">
              <a href="#" className="text-sm">
                Home
              </a>
              <a href="#" className="text-sm">
                About
              </a>
              <a href="#" className="text-sm">
                Contact
              </a>
            </nav>
          </div>
        </Container>
      </header>

      {/* Hero - Large container for wide content */}
      <section className="bg-muted py-16">
        <Container size="lg">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome to Our Site</h1>
            <p className="mt-4 text-muted-foreground">
              This hero section uses a large container for extra width
            </p>
          </div>
        </Container>
      </section>

      {/* Content - Default container */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">Feature {i}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Feature description goes here.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <Container>
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Company Name. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  ),
}
