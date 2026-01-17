"use client"

interface SessionProviderProps {
  children: React.ReactNode
}

// Supabase handles auth state internally, no provider wrapper needed
export function SessionProvider({ children }: SessionProviderProps) {
  return <>{children}</>
}
