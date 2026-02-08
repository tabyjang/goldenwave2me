"use client"

import { Globe } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { defaultSiteConfig } from "@/config/site.config"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: "ko", label: "Korean" },
  { code: "en", label: "English" },
] as const

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentLang =
    searchParams.get("lang") ?? defaultSiteConfig.locale ?? "ko"

  const handleChange = (lang: (typeof languages)[number]["code"]) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", lang)
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" title="Switch language">
          <Globe className="mr-2 h-4 w-4" />
          {currentLang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={currentLang === lang.code ? "bg-accent" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
