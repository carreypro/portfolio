'use client'

import { Container } from '@/components/layout/Container'
import { ProjectCard } from '@/components/project/ProjectCard'
import { GithubProjectCard } from '@/components/project/GithubProjectCard'
import { featuredProjects, githubProjects, projectHeadLine, projectIntro } from '@/config/projects'
import { CustomIcon } from '@/components/shared/CustomIcon'

export default function WorksPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      {/* 项目展示 */}
      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {projectHeadLine}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          {projectIntro}
        </p>
      </div>

      <div className="mt-16 sm:mt-20">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} titleAs='h3'/>
          ))}
        </ul>
      </div>

      {/* 开源项目 */}
      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none mt-16 pt-16 border-t border-muted">
        <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
          <CustomIcon name='github' size={28}/>
          Open Source
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
        >
          {githubProjects.map((project) => (
            <GithubProjectCard key={project.name} project={project} titleAs='h3'/>
          ))}
        </ul>
      </div>
    </Container>
  )
}
