"use client"

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'
import { FriendType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'

interface FriendCardProps {
  friend: FriendType
}

export function FriendCard({ friend }: FriendCardProps) {
  return (
    <Link
      href={`${friend.link}${utm_source}`}
      target="_blank"
      className="group relative flex items-center gap-4 rounded-lg border border-neutral-200 bg-white p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 hover:dark:border-neutral-700 hover:dark:bg-neutral-800"
    >
      <Image
        src={friend.avatar}
        width={60}
        height={60}
        alt={friend.name}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-lg font-semibold">{friend.name}</span>
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          {friend.description}
        </span>
      </div>
      <ArrowUpRight
        size={20}
        className="absolute right-4 top-4 text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-neutral-400"
      />
    </Link>
  )
}