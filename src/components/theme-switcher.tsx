"use client"

import * as React from "react"
import { Palette } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { themeList } from "@/themes"
import type { ThemeName } from "@/types/theme"

export function ThemeSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const handleThemeChange = (themeName: ThemeName) => {
    router.push(`/templates/${themeName}`)
  }

  const currentTheme = React.useMemo(() => {
    const match = pathname.match(/\/templates\/(\w+)/)
    return match ? match[1] : null
  }, [pathname])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" title="Switch Template">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch template</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeList.map((theme) => (
          <DropdownMenuItem
            key={theme.name}
            onClick={() => handleThemeChange(theme.name)}
            className={currentTheme === theme.name ? "bg-accent" : ""}
          >
            {theme.displayName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
