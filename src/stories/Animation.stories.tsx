import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { FadeIn } from "@/components/animation/fade-in"
import { SlideIn } from "@/components/animation/slide-in"
import { ScaleIn } from "@/components/animation/scale-in"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const meta: Meta = {
  title: "Animation/Overview",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta

export const FadeInDefault: StoryObj = {
  render: () => (
    <FadeIn>
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Fade In</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This card fades in with default settings.</p>
        </CardContent>
      </Card>
    </FadeIn>
  ),
}

export const FadeInWithDelay: StoryObj = {
  render: () => (
    <div className="flex gap-4">
      <FadeIn delay={0}>
        <Card className="w-[150px]">
          <CardContent className="pt-6">
            <p>No delay</p>
          </CardContent>
        </Card>
      </FadeIn>
      <FadeIn delay={0.2}>
        <Card className="w-[150px]">
          <CardContent className="pt-6">
            <p>0.2s delay</p>
          </CardContent>
        </Card>
      </FadeIn>
      <FadeIn delay={0.4}>
        <Card className="w-[150px]">
          <CardContent className="pt-6">
            <p>0.4s delay</p>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  ),
}

export const SlideInUp: StoryObj = {
  render: () => (
    <SlideIn direction="up">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Slide In Up</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This card slides in from below.</p>
        </CardContent>
      </Card>
    </SlideIn>
  ),
}

export const SlideInDirections: StoryObj = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <SlideIn direction="up" delay={0}>
        <Card>
          <CardContent className="pt-6">
            <p className="text-center">Up</p>
          </CardContent>
        </Card>
      </SlideIn>
      <SlideIn direction="down" delay={0.1}>
        <Card>
          <CardContent className="pt-6">
            <p className="text-center">Down</p>
          </CardContent>
        </Card>
      </SlideIn>
      <SlideIn direction="left" delay={0.2}>
        <Card>
          <CardContent className="pt-6">
            <p className="text-center">Left</p>
          </CardContent>
        </Card>
      </SlideIn>
      <SlideIn direction="right" delay={0.3}>
        <Card>
          <CardContent className="pt-6">
            <p className="text-center">Right</p>
          </CardContent>
        </Card>
      </SlideIn>
    </div>
  ),
}

export const ScaleInDefault: StoryObj = {
  render: () => (
    <ScaleIn>
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Scale In</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This card scales in with a subtle zoom effect.</p>
        </CardContent>
      </Card>
    </ScaleIn>
  ),
}

export const ScaleInWithDelay: StoryObj = {
  render: () => (
    <div className="flex gap-4">
      <ScaleIn delay={0}>
        <Button>First</Button>
      </ScaleIn>
      <ScaleIn delay={0.1}>
        <Button>Second</Button>
      </ScaleIn>
      <ScaleIn delay={0.2}>
        <Button>Third</Button>
      </ScaleIn>
    </div>
  ),
}

export const CombinedAnimations: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <FadeIn>
        <h2 className="text-2xl font-bold">Welcome to Our App</h2>
      </FadeIn>
      <SlideIn direction="up" delay={0.2}>
        <p className="text-muted-foreground">
          Discover amazing features with smooth animations.
        </p>
      </SlideIn>
      <ScaleIn delay={0.4}>
        <Button>Get Started</Button>
      </ScaleIn>
    </div>
  ),
}

export const StaggeredList: StoryObj = {
  render: () => (
    <div className="space-y-2">
      {["Feature 1", "Feature 2", "Feature 3", "Feature 4"].map(
        (item, index) => (
          <SlideIn key={item} direction="left" delay={index * 0.1}>
            <Card>
              <CardContent className="py-3">
                <p>{item}</p>
              </CardContent>
            </Card>
          </SlideIn>
        )
      )}
    </div>
  ),
}
