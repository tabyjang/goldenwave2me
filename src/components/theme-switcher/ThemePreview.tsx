/**
 * ThemePreview - 현재 테마 미리보기
 *
 * 현재 활성화된 색상 패키지를 시각적으로 보여줌
 */

'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { getActivePackage } from '@/lib/theme-utils'

export interface ThemePreviewProps {
  /** CSS 클래스 */
  className?: string

  /** 샘플 콘텐츠 표시 여부 (default: true) */
  showSamples?: boolean
}

/**
 * ThemePreview 컴포넌트
 *
 * @example
 * <ThemePreview />
 *
 * @example
 * <ThemePreview showSamples={false} />
 */
export function ThemePreview({ className, showSamples = true }: ThemePreviewProps) {
  const [currentPackage, setCurrentPackage] = useState(getActivePackage())

  useEffect(() => {
    // 색상 변경 감지를 위한 interval (간단한 구현)
    const interval = setInterval(() => {
      const pkg = getActivePackage()
      if (pkg.name !== currentPackage.name) {
        setCurrentPackage(pkg)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [currentPackage.name])

  if (!showSamples) {
    return (
      <div className={className}>
        <div className="rounded-lg border border-primary/20 bg-card p-4">
          <p className="text-sm text-muted-foreground">
            현재 테마: <span className="font-semibold text-foreground">{currentPackage.name}</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold">현재 테마: {currentPackage.name}</h3>

        <div className="space-y-4">
          {/* 버튼 샘플 */}
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Primary 버튼</Button>
            <Button variant="secondary">Secondary 버튼</Button>
            <Button variant="outline">Outline 버튼</Button>
          </div>

          {/* 색상 팔레트 */}
          <div className="grid grid-cols-5 gap-2">
            <div className="space-y-1">
              <div
                className="h-12 rounded-md shadow-sm"
                style={{ backgroundColor: currentPackage.colors.primary[500] }}
              />
              <p className="text-xs text-muted-foreground">Primary</p>
            </div>
            <div className="space-y-1">
              <div
                className="h-12 rounded-md shadow-sm"
                style={{ backgroundColor: currentPackage.colors.accent[500] }}
              />
              <p className="text-xs text-muted-foreground">Accent</p>
            </div>
            <div className="space-y-1">
              <div
                className="h-12 rounded-md shadow-sm"
                style={{ backgroundColor: currentPackage.colors.semantic.success[500] }}
              />
              <p className="text-xs text-muted-foreground">Success</p>
            </div>
            <div className="space-y-1">
              <div
                className="h-12 rounded-md shadow-sm"
                style={{ backgroundColor: currentPackage.colors.semantic.warning[500] }}
              />
              <p className="text-xs text-muted-foreground">Warning</p>
            </div>
            <div className="space-y-1">
              <div
                className="h-12 rounded-md shadow-sm"
                style={{ backgroundColor: currentPackage.colors.semantic.error[500] }}
              />
              <p className="text-xs text-muted-foreground">Error</p>
            </div>
          </div>

          {/* 텍스트 샘플 */}
          <div className="space-y-2">
            <p className="text-foreground">일반 텍스트</p>
            <p className="text-muted-foreground">Muted 텍스트</p>
            <p className="text-primary">Primary 텍스트</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
