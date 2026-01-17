import { NextResponse, type NextRequest } from "next/server"
import { updateSession } from "./lib/supabase/middleware"

// Protected routes that require authentication
const protectedPaths = ["/dashboard", "/admin", "/settings"]

// Auth routes (signin, signup, error)
const authPaths = ["/auth/signin", "/auth/signup", "/auth/error"]

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Update Supabase session (refresh tokens)
  const { supabaseResponse, user } = await updateSession(request)

  // Check if this is a protected or auth route
  const isProtectedRoute = protectedPaths.some((path) =>
    pathname.startsWith(path)
  )
  const isAuthRoute = authPaths.some((path) => pathname.startsWith(path))

  const isLoggedIn = !!user

  // Redirect logged-in users away from auth pages
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Redirect unauthenticated users to signin
  if (isProtectedRoute && !isLoggedIn) {
    const signInUrl = new URL("/auth/signin", request.url)
    signInUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(signInUrl)
  }

  return supabaseResponse
}

export const config = {
  // Match all paths except static files, api routes, and Next.js internals
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
}
