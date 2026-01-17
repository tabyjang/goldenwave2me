import createMiddleware from "next-intl/middleware"
import { NextResponse, type NextRequest } from "next/server"
import { routing } from "./i18n/routing"
import { updateSession } from "./lib/supabase/middleware"

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing)

// Protected routes that require authentication
const protectedPaths = ["/dashboard", "/admin", "/settings"]

// Auth routes (signin, signup, error)
const authPaths = ["/auth/signin", "/auth/signup", "/auth/error"]

function getPathWithoutLocale(pathname: string): string {
  // Remove locale prefix if present
  const localePattern = new RegExp(`^/(${routing.locales.join("|")})(/|$)`)
  return pathname.replace(localePattern, "/")
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathWithoutLocale = getPathWithoutLocale(pathname)

  // Update Supabase session (refresh tokens)
  const { supabaseResponse, user } = await updateSession(request)

  // Check if this is a protected or auth route
  const isProtectedRoute = protectedPaths.some((path) =>
    pathWithoutLocale.startsWith(path)
  )
  const isAuthRoute = authPaths.some((path) =>
    pathWithoutLocale.startsWith(path)
  )

  const isLoggedIn = !!user

  // Redirect logged-in users away from auth pages
  if (isAuthRoute && isLoggedIn) {
    const locale =
      pathname.match(new RegExp(`^/(${routing.locales.join("|")})`))?.[1] ||
      routing.defaultLocale
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  // Redirect unauthenticated users to signin
  if (isProtectedRoute && !isLoggedIn) {
    const locale =
      pathname.match(new RegExp(`^/(${routing.locales.join("|")})`))?.[1] ||
      routing.defaultLocale
    const signInUrl = new URL(`/${locale}/auth/signin`, request.url)
    signInUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(signInUrl)
  }

  // Handle i18n routing
  const intlResponse = intlMiddleware(request)

  // Merge Supabase cookies with intl response
  supabaseResponse.cookies.getAll().forEach((cookie) => {
    intlResponse.cookies.set(cookie.name, cookie.value, cookie)
  })

  return intlResponse
}

export const config = {
  // Match all paths except static files, api routes, and Next.js internals
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
}
