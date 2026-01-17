import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "./types"

// Check if Supabase is properly configured
function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  return !!(
    url &&
    key &&
    url.includes("supabase.co") &&
    !url.includes("placeholder") &&
    !key.includes("placeholder")
  )
}

export function createClient() {
  if (!isSupabaseConfigured()) {
    // Return a mock client for demo mode
    return null
  }

  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
