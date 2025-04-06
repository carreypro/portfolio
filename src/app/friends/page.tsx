'use client'

import { Container } from '@/components/layout/Container'
import { friends, friendsHeadLine, friendsIntro } from '@/config/friends'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react'

export default function FriendsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {friendsHeadLine}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {friendsIntro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {friends.map((friend) => (
            <Link 
              key={friend.name} 
              href={friend.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center rounded-xl bg-zinc-50 p-4 transition hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800"
            >
              <Image
                src={friend.avatar}
                alt={friend.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-4 flex-auto">
                <div className="font-medium text-zinc-900 dark:text-zinc-100">
                  {friend.name}
                </div>
              </div>
              <ArrowUpRight size={32} weight="duotone" className="h-4 w-4 group-hover:text-primary group-hover:cursor-pointer" />
            </Link>
          ))}
        </ul>
      </div>
    </Container>
  )
}
