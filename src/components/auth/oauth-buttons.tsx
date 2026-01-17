"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { signInWithOAuth } from "@/lib/actions/auth"

export function OAuthButtons() {
  return (
    <div className="grid gap-3">
      <form action={() => signInWithOAuth("github")}>
        <Button variant="outline" className="w-full" type="submit">
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Continue with GitHub
        </Button>
      </form>
      <form action={() => signInWithOAuth("google")}>
        <Button variant="outline" className="w-full" type="submit">
          <Icons.google className="mr-2 h-4 w-4" />
          Continue with Google
        </Button>
      </form>
    </div>
  )
}
