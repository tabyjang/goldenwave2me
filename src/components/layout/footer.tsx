"use client"

import { useTranslations } from "next-intl"
import { Container } from "./container"

export function Footer() {
  const t = useTranslations("Footer")
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-0">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {t("copyright", { year: currentYear })}
          </p>
          <p className="text-sm text-muted-foreground">{t("builtWith")}</p>
        </div>
      </Container>
    </footer>
  )
}
