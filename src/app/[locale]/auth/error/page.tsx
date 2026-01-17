import type { Metadata } from "next"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn, SlideIn } from "@/components/animation"
import { constructMetadata } from "@/lib/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Authentication Error",
  description: "An error occurred during authentication",
})

interface AuthErrorPageProps {
  searchParams: Promise<{ error?: string }>
}

const errorMessages: Record<string, { title: string; description: string }> = {
  Configuration: {
    title: "Server Error",
    description:
      "There is a problem with the server configuration. Please contact support if this error persists.",
  },
  AccessDenied: {
    title: "Access Denied",
    description:
      "You do not have permission to sign in. Please contact support if you believe this is a mistake.",
  },
  Verification: {
    title: "Verification Error",
    description:
      "The verification link may have expired or already been used. Please request a new one.",
  },
  OAuthSignin: {
    title: "OAuth Error",
    description: "Could not start the sign in process. Please try again.",
  },
  OAuthCallback: {
    title: "OAuth Callback Error",
    description: "Could not complete the sign in process. Please try again.",
  },
  OAuthCreateAccount: {
    title: "Account Creation Error",
    description:
      "Could not create your account. Please try again or use a different sign in method.",
  },
  EmailCreateAccount: {
    title: "Email Account Error",
    description:
      "Could not create your account with this email. Please try again.",
  },
  Callback: {
    title: "Callback Error",
    description:
      "An error occurred during the authentication callback. Please try again.",
  },
  OAuthAccountNotLinked: {
    title: "Account Not Linked",
    description:
      "This email is already associated with another account. Please sign in with the original provider.",
  },
  EmailSignin: {
    title: "Email Sign In Error",
    description: "Could not send the sign in email. Please try again.",
  },
  CredentialsSignin: {
    title: "Sign In Failed",
    description:
      "The credentials you provided are incorrect. Please check and try again.",
  },
  SessionRequired: {
    title: "Session Required",
    description: "You need to be signed in to access this page.",
  },
  Default: {
    title: "Authentication Error",
    description: "An unexpected error occurred. Please try again.",
  },
}

export default async function AuthErrorPage({
  searchParams,
}: AuthErrorPageProps) {
  const { error } = await searchParams
  const errorInfo = errorMessages[error || "Default"] || errorMessages.Default

  return (
    <div className="container flex min-h-screen items-center justify-center py-12">
      <FadeIn className="w-full max-w-lg">
        <SlideIn direction="up" className="w-full">
          <Card className="mx-auto w-full max-w-lg">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-destructive"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <CardTitle className="text-2xl font-bold">
                {errorInfo.title}
              </CardTitle>
              <CardDescription>{errorInfo.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                <Button asChild className="w-full">
                  <Link href="/auth/signin">Try Again</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/">Go Home</Link>
                </Button>
              </div>
              {error && (
                <p className="text-center text-xs text-muted-foreground">
                  Error code: {error}
                </p>
              )}
            </CardContent>
          </Card>
        </SlideIn>
      </FadeIn>
    </div>
  )
}
