/**
 * CustomThemeBuilder - 커스텀 색상 테마 빌더
 *
 * 사용자가 원하는 Primary, Accent 색상을 직접 선택하여 즉시 적용
 */

'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Palette, Check, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export interface CustomThemeBuilderProps {
  /** CSS 클래스 */
  className?: string

  /** 색상 변경 시 콜백 */
  onChange?: (colors: { primary: string; accent: string }) => void
}

/**
 * CustomThemeBuilder 컴포넌트
 *
 * @example
 * <CustomThemeBuilder onChange={(colors) => console.log(colors)} />
 */
export function CustomThemeBuilder({ className, onChange }: CustomThemeBuilderProps) {
  const [primaryColor, setPrimaryColor] = useState('#C4A77D') // warmElegance primary
  const [accentColor, setAccentColor] = useState('#D4A373') // warmElegance accent
  const [isApplied, setIsApplied] = useState(false)

  // 인기 색상 프리셋
  const popularColors = [
    { name: '골드', color: '#D4AF37' },
    { name: '로즈', color: '#C9A0DC' },
    { name: '세이지', color: '#87A878' },
    { name: '네이비', color: '#1A1F3A' },
    { name: '코랄', color: '#FF7F7F' },
    { name: '민트', color: '#98D8C8' },
    { name: '라벤더', color: '#B19CD9' },
    { name: '피치', color: '#FFB997' },
  ]

  const handleApply = () => {
    // CSS 변수로 직접 적용
    document.documentElement.style.setProperty('--color-primary', primaryColor)
    document.documentElement.style.setProperty('--primary', primaryColor)

    // Accent 색상도 적용
    const accentShades = generateColorShades(accentColor)
    document.documentElement.style.setProperty('--color-accent', accentShades[100])
    document.documentElement.style.setProperty('--accent', accentShades[100])
    document.documentElement.style.setProperty('--color-accent-foreground', accentShades[950])
    document.documentElement.style.setProperty('--accent-foreground', accentShades[950])

    // Primary 관련 변수들도 업데이트
    const primaryShades = generateColorShades(primaryColor)
    document.documentElement.style.setProperty('--color-primary-foreground', primaryShades[50])
    document.documentElement.style.setProperty('--primary-foreground', primaryShades[50])
    document.documentElement.style.setProperty('--color-ring', primaryShades[400])
    document.documentElement.style.setProperty('--ring', primaryShades[400])

    // Chart colors
    document.documentElement.style.setProperty('--chart-1', primaryColor)
    document.documentElement.style.setProperty('--chart-2', accentColor)

    // Sidebar
    document.documentElement.style.setProperty('--sidebar-primary', primaryColor)
    document.documentElement.style.setProperty('--sidebar-primary-foreground', primaryShades[50])

    setIsApplied(true)
    setTimeout(() => setIsApplied(false), 2000)

    // LocalStorage에 저장
    localStorage.setItem('custom-theme', JSON.stringify({ primaryColor, accentColor }))

    onChange?.({ primary: primaryColor, accent: accentColor })
  }

  const handleReset = () => {
    setPrimaryColor('#C4A77D')
    setAccentColor('#D4A373')
    localStorage.removeItem('custom-theme')
  }

  // 간단한 색상 음영 생성 (실제로는 더 정교한 알고리즘 필요)
  const generateColorShades = (hex: string): Record<number, string> => {
    return {
      50: lightenColor(hex, 0.95),
      100: lightenColor(hex, 0.85),
      400: lightenColor(hex, 0.2),
      950: darkenColor(hex, 0.7),
    }
  }

  const lightenColor = (hex: string, amount: number): string => {
    const num = parseInt(hex.replace('#', ''), 16)
    const r = Math.min(255, Math.floor(((num >> 16) & 0xff) + (255 - ((num >> 16) & 0xff)) * amount))
    const g = Math.min(255, Math.floor(((num >> 8) & 0xff) + (255 - ((num >> 8) & 0xff)) * amount))
    const b = Math.min(255, Math.floor((num & 0xff) + (255 - (num & 0xff)) * amount))
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')
  }

  const darkenColor = (hex: string, amount: number): string => {
    const num = parseInt(hex.replace('#', ''), 16)
    const r = Math.floor(((num >> 16) & 0xff) * (1 - amount))
    const g = Math.floor(((num >> 8) & 0xff) * (1 - amount))
    const b = Math.floor((num & 0xff) * (1 - amount))
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')
  }

  return (
    <Card className={cn('p-6', className)}>
      <div className="mb-6 flex items-center gap-3">
        <Palette className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-semibold">커스텀 색상 만들기</h3>
      </div>

      <div className="space-y-6">
        {/* Primary 색상 선택 */}
        <div>
          <label className="mb-2 block text-sm font-medium">Primary 색상</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="h-12 w-20 cursor-pointer rounded-md border-2 border-border"
            />
            <input
              type="text"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm"
              placeholder="#C4A77D"
            />
          </div>

          {/* 인기 색상 프리셋 */}
          <div className="mt-3 flex flex-wrap gap-2">
            {popularColors.slice(0, 4).map((preset) => (
              <button
                key={preset.name}
                onClick={() => setPrimaryColor(preset.color)}
                className="group relative h-8 w-8 rounded-md border-2 border-border transition hover:scale-110"
                style={{ backgroundColor: preset.color }}
                title={preset.name}
              />
            ))}
          </div>
        </div>

        {/* Accent 색상 선택 */}
        <div>
          <label className="mb-2 block text-sm font-medium">Accent 색상</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="h-12 w-20 cursor-pointer rounded-md border-2 border-border"
            />
            <input
              type="text"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm"
              placeholder="#D4A373"
            />
          </div>

          {/* 인기 색상 프리셋 */}
          <div className="mt-3 flex flex-wrap gap-2">
            {popularColors.slice(4, 8).map((preset) => (
              <button
                key={preset.name}
                onClick={() => setAccentColor(preset.color)}
                className="group relative h-8 w-8 rounded-md border-2 border-border transition hover:scale-110"
                style={{ backgroundColor: preset.color }}
                title={preset.name}
              />
            ))}
          </div>
        </div>

        {/* 미리보기 */}
        <div className="rounded-lg border bg-card p-4">
          <p className="mb-3 text-sm font-medium">미리보기</p>
          <div className="flex gap-2">
            <div
              className="h-16 flex-1 rounded-md shadow-sm"
              style={{ backgroundColor: primaryColor }}
            />
            <div
              className="h-16 flex-1 rounded-md shadow-sm"
              style={{ backgroundColor: accentColor }}
            />
            <div
              className="h-16 flex-1 rounded-md shadow-sm"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
              }}
            />
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="flex gap-3">
          <Button onClick={handleApply} className="flex-1" disabled={isApplied}>
            {isApplied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                적용됨!
              </>
            ) : (
              '색상 적용하기'
            )}
          </Button>
          <Button onClick={handleReset} variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            초기화
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          💡 선택한 색상은 자동으로 저장되며, 다음 방문 시에도 유지됩니다.
        </p>
      </div>
    </Card>
  )
}
