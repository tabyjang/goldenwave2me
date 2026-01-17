"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { resetPassword } from "@/lib/actions/auth"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function ForgotPasswordPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const message = searchParams.get("message")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    await resetPassword(formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">비밀번호 재설정</CardTitle>
          <CardDescription>
            가입하신 이메일 주소를 입력하시면 비밀번호 재설정 링크를
            보내드립니다
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {message && (
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          {/* Reset Password Form */}
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                disabled={isLoading || !!message}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !!message}
            >
              {isLoading ? "전송 중..." : "재설정 링크 보내기"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-muted-foreground text-center">
            비밀번호가 기억나셨나요?{" "}
            <Link href="/auth/signin" className="text-primary hover:underline">
              로그인
            </Link>
          </div>
          <div className="text-sm text-center">
            <Link
              href="/"
              className="text-muted-foreground hover:underline inline-flex items-center gap-1"
            >
              <ArrowLeft className="h-3 w-3" />
              홈으로 돌아가기
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
