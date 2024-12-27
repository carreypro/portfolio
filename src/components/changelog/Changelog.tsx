import { Card } from '@/components/shared/Card'
import { useId } from 'react'
import { ChangelogItemType, changelogList } from '@/config/infoConfig'

function ChangelogSection({
  date,
  children,
}: {
  date: string
  children: React.ReactNode
}) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2
          id={id}
          className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
        >
          {date}
        </h2>
        <div className="md:col-span-3 space-y-6">{children}</div>
      </div>
    </section>
  )
}


function ChangelogItem({
  title,
  description,
  divider,
}: {
  title: string
  description: string
  divider?: boolean
}) {
  return (
    <>
      <Card as="li">
        <Card.Title as="h3">
          {title}
        </Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card>
      {divider && <div className="border-t border-zinc-100 dark:border-zinc-700/40" />}
    </>
  )
}

export default function ChangelogBlock() {
  return (
    <>
      {changelogList.map((item: ChangelogItemType, index) => (
        <ChangelogSection date={item.date} key={index}>
          {item.content.map((content, index2) => (
            <ChangelogItem
              key={index2}
              title={content.title}
              description={content.description}
              divider={content.divider}
            />
          ))}
        </ChangelogSection>
      ))}
    </>)
}