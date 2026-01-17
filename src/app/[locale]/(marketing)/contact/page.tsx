import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"
import { MainLayout } from "@/components/layout"
import { Hero, ContactForm } from "@/components/sections"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "문의하기",
  description:
    "골든웨이브에 문의하세요. 무료 마케팅 진단을 받아보실 수 있습니다. 24시간 이내에 담당자가 연락드립니다.",
})

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

const contactInfo = {
  email: "contact@goldenwave.co.kr",
  phone: "02-1234-5678",
  address: "서울특별시 강남구 테헤란로 123, 골든타워 15층",
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations("Contact")

  return (
    <MainLayout>
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <ContactForm
        title={t("formTitle")}
        subtitle={t("formSubtitle")}
        contactInfo={contactInfo}
      />
    </MainLayout>
  )
}
