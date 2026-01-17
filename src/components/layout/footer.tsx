"use client"

import { Container } from "./container"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-0">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} 골든웨이브. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            데이터 기반 디지털 마케팅 에이전시
          </p>
        </div>
      </Container>
    </footer>
  )
}
