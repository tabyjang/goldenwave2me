import { notFound } from "next/navigation"
import { setRequestLocale, getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "@/components/providers/session-provider"
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld"
import { routing, type Locale } from "@/i18n/routing"

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params

  // Validate locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Get messages for the locale
  const messages = await getMessages()

  return (
    <>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProvider>
      </NextIntlClientProvider>
    </>
  )
}
