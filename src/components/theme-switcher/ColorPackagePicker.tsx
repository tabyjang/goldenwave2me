/**
 * ColorPackagePicker - 색상 패키지 선택기
 *
 * 6개 색상 패키지를 선택하여 전체 사이트 색상을 즉시 변경
 */

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getAllPackages } from '@/tokens'
import {
  setColorPackage,
  getActivePackageName,
  type ColorPackageName,
} from '@/lib/theme-utils'

export interface ColorPackagePickerProps {
  /** 기본 선택 패키지 (optional) */
  defaultPackage?: ColorPackageName

  /** 변경 시 콜백 */
  onChange?: (packageName: ColorPackageName) => void

  /** CSS 클래스 */
  className?: string

  /** 그리드 레이아웃 (default: true) */
  gridLayout?: boolean
}

/**
 * ColorPackagePicker 컴포넌트
 *
 * @example
 * <ColorPackagePicker onChange={(name) => console.log(name)} />
 *
 * @example
 * <ColorPackagePicker
 *   defaultPackage="Royal Mauve"
 *   gridLayout={false}
 * />
 */
export function ColorPackagePicker({
  defaultPackage,
  onChange,
  className,
  gridLayout = true,
}: ColorPackagePickerProps) {
  const packages = getAllPackages()
  const [selected, setSelected] = useState<ColorPackageName>(
    defaultPackage || getActivePackageName()
  )

  useEffect(() => {
    // 컴포넌트 마운트 시 현재 활성 패키지 로드
    setSelected(getActivePackageName())
  }, [])

  const handleSelect = (packageName: ColorPackageName) => {
    setSelected(packageName)
    setColorPackage(packageName)
    onChange?.(packageName)
  }

  return (
    <div
      className={cn(
        gridLayout
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
          : 'flex flex-col gap-4',
        className
      )}
    >
      {packages.map((pkg) => {
        const isSelected = selected === pkg.name
        const primaryColor = pkg.colors.primary[500]
        const accentColor = pkg.colors.accent[500]

        return (
          <motion.button
            key={pkg.name}
            onClick={() => handleSelect(pkg.name as ColorPackageName)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'relative overflow-hidden rounded-lg border-2 p-6 text-left transition-all',
              'bg-card hover:shadow-lg',
              isSelected
                ? 'border-primary shadow-md'
                : 'border-border hover:border-primary/50'
            )}
          >
            {/* 선택 체크마크 */}
            {isSelected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-3 right-3 rounded-full bg-primary p-1 text-primary-foreground"
              >
                <Check className="h-4 w-4" />
              </motion.div>
            )}

            {/* 색상 미리보기 */}
            <div className="mb-4 flex gap-2">
              <div
                className="h-12 w-12 rounded-md shadow-sm"
                style={{ backgroundColor: primaryColor }}
              />
              <div
                className="h-12 w-12 rounded-md shadow-sm"
                style={{ backgroundColor: accentColor }}
              />
              <div
                className="h-12 flex-1 rounded-md shadow-sm"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                }}
              />
            </div>

            {/* 패키지 정보 */}
            <h3 className="mb-2 text-lg font-semibold">{pkg.name}</h3>
            <p className="text-sm text-muted-foreground">{pkg.description}</p>
          </motion.button>
        )
      })}
    </div>
  )
}
