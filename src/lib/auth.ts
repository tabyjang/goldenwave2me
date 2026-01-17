import { createClient } from "@/lib/supabase/server"

/**
 * Get the current user from Supabase
 * Use this in Server Components and Route Handlers
 */
export async function getCurrentUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

/**
 * Check if the user is authenticated
 */
export async function isAuthenticated() {
  const user = await getCurrentUser()
  return !!user
}

/**
 * Get the current session
 */
export async function getSession() {
  const supabase = await createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session
}

// Re-export signOut from actions for convenience
export { signOut } from "@/lib/actions/auth"
