import type { Metadata } from "next"
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
import { updatePassword } from "@/lib/actions/auth"
import { KeyRound } from "lucide-react"

export const metadata: Metadata = constructMetadata({
  title: "새 비밀번호 설정",
  description: "새로운 비밀번호를 설정하세요.",
})

interface UpdatePasswordPageProps {
  searchParams: Promise<{ error?: string }>
}

export default async function UpdatePasswordPage({
  searchParams,
}: UpdatePasswordPageProps) {
  const { error } = await searchParams

  return (
    <div className="container flex min-h-screen items-center justify-center py-12">
      <FadeIn className="w-full max-w-md">
        <SlideIn direction="up" className="w-full">
          <Card className="w-full">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <KeyRound className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">
                새 비밀번호 설정
              </CardTitle>
              <CardDescription>
                새로운 비밀번호를 입력해 주세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  {decodeURIComponent(error)}
                </div>
              )}

              <form action={updatePassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">새 비밀번호</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                  <p className="text-xs text-muted-foreground">
                    최소 8자 이상의 비밀번호를 입력하세요.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                </div>
                <Button type="submit" className="w-full">
                  비밀번호 변경
                </Button>
              </form>
            </CardContent>
          </Card>
        </SlideIn>
      </FadeIn>
    </div>
  )
}
