"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { headers } from "next/headers"

export async function signInWithEmail(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect(`/auth/signin?error=${encodeURIComponent(error.message)}`)
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export async function signUpWithEmail(formData: FormData) {
  const supabase = await createClient()
  const headersList = await headers()
  const origin = headersList.get("origin")

  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const fullName = formData.get("fullName") as string

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/api/auth/callback`,
      data: {
        full_name: fullName,
      },
    },
  })

  if (error) {
    redirect(`/auth/signup?error=${encodeURIComponent(error.message)}`)
  }

  // Email confirmation disabled, redirect to home
  revalidatePath("/", "layout")
  redirect("/")
}

export async function signInWithOAuth(provider: "github" | "google") {
  const supabase = await createClient()
  const headersList = await headers()
  const origin = headersList.get("origin")

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/api/auth/callback`,
    },
  })

  if (error) {
    redirect(`/auth/signin?error=${encodeURIComponent(error.message)}`)
  }

  if (data.url) {
    redirect(data.url)
  }
}

export async function signOut() {
  const supabase = await createClient()

  await supabase.auth.signOut()

  revalidatePath("/", "layout")
  redirect("/")
}

export async function resetPassword(formData: FormData) {
  const supabase = await createClient()
  const headersList = await headers()
  const origin = headersList.get("origin")

  const email = formData.get("email") as string

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/api/auth/callback?next=/auth/update-password`,
  })

  if (error) {
    redirect(`/auth/forgot-password?error=${encodeURIComponent(error.message)}`)
  }

  redirect("/auth/forgot-password?message=Check your email for a password reset link")
}

export async function updatePassword(formData: FormData) {
  const supabase = await createClient()

  const password = formData.get("password") as string

  const { error } = await supabase.auth.updateUser({
    password,
  })

  if (error) {
    redirect(`/auth/update-password?error=${encodeURIComponent(error.message)}`)
  }

  revalidatePath("/", "layout")
  redirect("/")
}
