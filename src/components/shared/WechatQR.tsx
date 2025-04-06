'use client'

import { useState, useCallback } from 'react'
import { WechatLogo } from '@phosphor-icons/react'
import Image from 'next/image'

export function WechatQR({ size = 20 }: { size?: number }) {
  const [showQR, setShowQR] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setShowQR(true)
  }, [])

  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    const target = e.currentTarget
    const relatedTarget = e.relatedTarget as HTMLElement
    
    // 检查鼠标是否移动到二维码上
    if (relatedTarget && target.contains(relatedTarget)) {
      return
    }
    setShowQR(false)
  }, [])

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
        aria-label="WeChat QR Code"
      >
        <WechatLogo size={size} weight="duotone" />
      </button>
      
      <div 
        className={`absolute z-[100] -right-[100px] top-0 transition-all duration-200 ${
          showQR ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="relative rounded-lg bg-white p-3 shadow-xl dark:bg-zinc-800">
          <div className="relative w-[140px] h-[140px]">
            <Image
              src="/wechat-qr.jpg"
              alt="WeChat QR Code"
              fill
              className="rounded-lg object-contain"
              priority
            />
          </div>
          <div className="absolute -left-2 top-4 h-4 w-4 rotate-45 transform bg-white dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  )
} 