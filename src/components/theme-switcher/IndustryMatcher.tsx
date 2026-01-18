/**
 * IndustryMatcher - 업종별 색상 패키지 추천
 *
 * 사용자의 업종에 맞는 최적의 색상 패키지를 추천
 */

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Building2, Coffee, Briefcase, Hospital, Laptop, Gem, Palette } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  recommendPackageForIndustry,
  setColorPackage,
  type IndustryType,
  type ColorPackageName,
} from '@/lib/theme-utils'

const industries = [
  {
    type: 'cafe' as IndustryType,
    label: '카페 · 베이커리',
    icon: Coffee,
    description: '따뜻하고 친근한 느낌',
  },
  {
    type: 'legal' as IndustryType,
    label: '법률 · 컨설팅',
    icon: Briefcase,
    description: '신뢰감과 권위있는 이미지',
  },
  {
    type: 'medical' as IndustryType,
    label: '의료 · 웰니스',
    icon: Hospital,
    description: '안정감과 자연스러움',
  },
  {
    type: 'tech' as IndustryType,
    label: 'IT · 테크',
    icon: Laptop,
    description: '현대적이고 세련된 느낌',
  },
  {
    type: 'luxury' as IndustryType,
    label: '럭셔리 브랜드',
    icon: Gem,
    description: '고급스럽고 우아한 이미지',
  },
  {
    type: 'finance' as IndustryType,
    label: '금융 · 보석',
    icon: Building2,
    description: '프리미엄하고 신뢰감있는',
  },
  {
    type: 'creative' as IndustryType,
    label: '크리에이티브',
    icon: Palette,
    description: '창의적이고 유니크한',
  },
]

export interface IndustryMatcherProps {
  /** 추천 후 자동 적용 여부 (default: false) */
  autoApply?: boolean

  /** 업종 선택 시 콜백 */
  onSelect?: (industry: IndustryType, recommendedPackage: ColorPackageName) => void

  /** CSS 클래스 */
  className?: string
}

/**
 * IndustryMatcher 컴포넌트
 *
 * @example
 * <IndustryMatcher autoApply onSelect={(industry, pkg) => console.log(pkg)} />
 */
export function IndustryMatcher({
  autoApply = false,
  onSelect,
  className,
}: IndustryMatcherProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType | null>(null)
  const [recommendedPackage, setRecommendedPackage] = useState<ColorPackageName | null>(null)

  const handleIndustrySelect = (industry: IndustryType) => {
    setSelectedIndustry(industry)
    const recommended = recommendPackageForIndustry(industry)
    setRecommendedPackage(recommended)

    if (autoApply) {
      setColorPackage(recommended)
    }

    onSelect?.(industry, recommended)
  }

  return (
    <div className={cn('space-y-6', className)}>
      {/* 업종 선택 그리드 */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {industries.map((industry) => {
          const Icon = industry.icon
          const isSelected = selectedIndustry === industry.type

          return (
            <motion.button
              key={industry.type}
              onClick={() => handleIndustrySelect(industry.type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'flex flex-col items-center gap-2 rounded-lg border-2 p-4 text-center transition-all',
                isSelected
                  ? 'border-primary bg-primary/10 shadow-md'
                  : 'border-border bg-card hover:border-primary/50 hover:shadow-sm'
              )}
            >
              <Icon
                className={cn(
                  'h-6 w-6',
                  isSelected ? 'text-primary' : 'text-muted-foreground'
                )}
              />
              <span className="text-sm font-medium">{industry.label}</span>
            </motion.button>
          )
        })}
      </div>

      {/* 추천 결과 */}
      <AnimatePresence mode="wait">
        {recommendedPackage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="rounded-lg border border-primary/20 bg-primary/5 p-6"
          >
            <h3 className="mb-2 text-lg font-semibold">
              추천 색상 패키지: <span className="text-primary">{recommendedPackage}</span>
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {industries.find((i) => i.type === selectedIndustry)?.description}
            </p>

            {!autoApply && (
              <motion.button
                onClick={() => setColorPackage(recommendedPackage)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                이 색상으로 적용하기
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
