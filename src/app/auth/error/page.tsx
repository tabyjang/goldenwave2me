"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, ArrowLeft } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const errorDescription = searchParams.get("error_description")

  const getErrorMessage = () => {
    if (errorDescription) {
      return errorDescription
    }
    if (error === "access_denied") {
      return "인증이 거부되었습니다. 다시 시도해주세요."
    }
    if (error === "server_error") {
      return "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
    }
    if (error === "temporarily_unavailable") {
      return "서비스가 일시적으로 사용 불가능합니다. 잠시 후 다시 시도해주세요."
    }
    return "알 수 없는 오류가 발생했습니다. 다시 시도해주세요."
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-destructive" />
            인증 오류
          </CardTitle>
          <CardDescription>
            인증 과정에서 문제가 발생했습니다
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>{getErrorMessage()}</AlertDescription>
          </Alert>

          {error && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>오류 코드:</strong> {error}
              </p>
            </div>
          )}

          <div className="space-y-3 pt-4">
            <h3 className="font-semibold">다음 단계:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 다시 로그인을 시도해보세요</li>
              <li>• 이메일 주소와 비밀번호를 확인해주세요</li>
              <li>• 문제가 계속되면 비밀번호를 재설정해보세요</li>
              <li>• 그래도 해결되지 않으면 고객 지원팀에 문의해주세요</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Link href="/auth/signin" className="w-full">
            <Button className="w-full">다시 로그인 시도</Button>
          </Link>
          <Link href="/auth/forgot-password" className="w-full">
            <Button variant="outline" className="w-full">
              비밀번호 재설정
            </Button>
          </Link>
          <div className="text-sm text-center">
            <Link
              href="/"
              className="text-muted-foreground hover:underline inline-flex items-center gap-1"
            >
              <ArrowLeft className="h-3 w-3" />
              홈으로 돌아가기
            </Link>
          </div>
          <div className="text-sm text-center text-muted-foreground">
            문제가 계속되나요?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              문의하기
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
