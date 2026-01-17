import type { Metadata } from "next"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FadeIn, SlideIn } from "@/components/animation"
import { constructMetadata } from "@/lib/metadata"
import { resetPassword } from "@/lib/actions/auth"
import { ArrowLeft, Mail } from "lucide-react"

export const metadata: Metadata = constructMetadata({
  title: "비밀번호 재설정",
  description: "비밀번호를 잊으셨나요? 이메일로 재설정 링크를 받으세요.",
})

interface ForgotPasswordPageProps {
  searchParams: Promise<{ error?: string; message?: string }>
}

export default async function ForgotPasswordPage({
  searchParams,
}: ForgotPasswordPageProps) {
  const { error, message } = await searchParams

  return (
    <div className="container flex min-h-screen items-center justify-center py-12">
      <FadeIn className="w-full max-w-md">
        <SlideIn direction="up" className="w-full">
          <Card className="w-full">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">
                비밀번호 재설정
              </CardTitle>
              <CardDescription>
                가입하신 이메일 주소를 입력하시면 비밀번호 재설정 링크를
                보내드립니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {decodeURIComponent(error)}
                </div>
              )}

              {message && (
                <div className="rounded-md bg-primary/10 p-3 text-sm text-primary">
                  {message}
                </div>
              )}

              {!message && (
                <form action={resetPassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    재설정 링크 보내기
                  </Button>
                </form>
              )}

              <div className="pt-4">
                <Link
                  href="/auth/signin"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  로그인으로 돌아가기
                </Link>
              </div>
            </CardContent>
          </Card>
        </SlideIn>
      </FadeIn>
    </div>
  )
}
