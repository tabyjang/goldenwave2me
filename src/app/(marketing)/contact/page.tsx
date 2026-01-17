import { MainLayout } from "@/components/layout"
import { Hero, ContactForm } from "@/components/sections"
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "문의하기",
  description:
    "골든웨이브에 문의하세요. 무료 마케팅 진단을 받아보실 수 있습니다. 24시간 이내에 담당자가 연락드립니다.",
})

const contactInfo = {
  email: "contact@goldenwave.co.kr",
  phone: "02-1234-5678",
  address: "서울특별시 강남구 테헤란로 123, 골든타워 15층",
}

export default function ContactPage() {
  return (
    <MainLayout>
      <Hero
        title="문의하기"
        subtitle="프로젝트에 대해 이야기해 보세요. 무료 마케팅 진단을 받아보실 수 있습니다."
      />
      <ContactForm
        title="상담 신청"
        subtitle="아래 양식을 작성해 주시면 담당자가 24시간 이내에 연락드립니다."
        contactInfo={contactInfo}
      />
    </MainLayout>
  )
}
