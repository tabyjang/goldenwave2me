import type { Metadata } from "next"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { OAuthButtons } from "@/components/auth/oauth-buttons"
import { FadeIn, SlideIn } from "@/components/animation"
import { constructMetadata } from "@/lib/metadata"
import { signInWithEmail } from "@/lib/actions/auth"

export const metadata: Metadata = constructMetadata({
  title: "Sign In",
  description: "Sign in to your account",
})

interface SignInPageProps {
  searchParams: Promise<{ callbackUrl?: string; error?: string; message?: string }>
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const { error, message } = await searchParams

  return (
    <div className="container flex min-h-screen items-center justify-center py-12">
      <FadeIn className="w-full max-w-md">
        <SlideIn direction="up" className="w-full">
          <Card className="w-full">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
              <CardDescription>
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {decodeURIComponent(error)}
                </div>
              )}

              {message && (
                <div className="rounded-md bg-primary/10 p-3 text-sm text-primary">
                  {message}
                </div>
              )}

              <OAuthButtons />

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with email
                  </span>
                </div>
              </div>

              <form action={signInWithEmail} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/auth/forgot-password"
                      className="text-xs text-muted-foreground hover:text-primary"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </CardContent>
          </Card>
        </SlideIn>
      </FadeIn>
    </div>
  )
}
