'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/layout/Container'
import { LoadingState } from '@/components/shared/LoadingState'
import { ErrorMessage } from '@/components/shared/ErrorMessage'

/**
 * 网站管理页面
 * 提供友好的配置界面，让用户可以轻松修改网站内容
 */
export default function AdminPage() {
  // 基本信息配置
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    headline: '',
    introduction: '',
    email: '',
    github: '',
  })

  // 社交媒体链接配置
  const [socialLinks, setSocialLinks] = useState([
    {
      name: 'X',
      icon: 'x',
      href: 'https://x.com/realcoreychiu'
    },
    {
      name: 'Bsky',
      icon: 'bsky',
      href: 'https://bsky.app/profile/coreychiu.com'
    },
    {
      name: 'Jike',
      icon: 'pill',
      href: 'https://okjk.co/P7c1zU'
    },
    {
      name: 'Github',
      icon: 'github',
      href: 'https://github.com/iamcorey'
    },
    {
      name: 'Wechat',
      icon: 'wechat',
      href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ'
    },
    {
      name: 'Ko-fi',
      icon: 'coffee',
      href: 'https://ko-fi.com/coreychiu'
    }
  ])

  // 项目配置
  const [projects, setProjects] = useState([
    { name: '', description: '', link: '', icon: '' }
  ])

  // 技能标签
  const [techIcons, setTechIcons] = useState([''])

  // 加载状态
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  // 当前选中的配置标签
  const [activeTab, setActiveTab] = useState('basic')

  // 从本地存储加载配置
  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem('portfolio-config')
      if (savedConfig) {
        const config = JSON.parse(savedConfig)
        setBasicInfo({
          name: config.name || '',
          headline: config.headline || '',
          introduction: config.introduction || '',
          email: config.email || '',
          github: config.github || '',
        })
        setProjects(config.projects || [{ name: '', description: '', link: '', icon: '' }])
        setTechIcons(config.techIcons || [''])
        setSocialLinks(config.socialLinks || [
          {
            name: 'X',
            icon: 'x',
            href: 'https://x.com/realcoreychiu'
          },
          {
            name: 'Bsky',
            icon: 'bsky',
            href: 'https://bsky.app/profile/coreychiu.com'
          },
          {
            name: 'Jike',
            icon: 'pill',
            href: 'https://okjk.co/P7c1zU'
          },
          {
            name: 'Github',
            icon: 'github',
            href: 'https://github.com/iamcorey'
          },
          {
            name: 'Wechat',
            icon: 'wechat',
            href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ'
          },
          {
            name: 'Ko-fi',
            icon: 'coffee',
            href: 'https://ko-fi.com/coreychiu'
          }
        ])
      }
    } catch (err) {
      setError('配置加载失败')
    } finally {
      setIsLoading(false)
    }
  }, [])

  // 保存配置到本地存储
  const saveConfig = () => {
    try {
      const config = {
        ...basicInfo,
        projects,
        techIcons,
        socialLinks
      }
      localStorage.setItem('portfolio-config', JSON.stringify(config))
      alert('配置已保存！请刷新主页查看效果。')
    } catch (err) {
      setError('保存失败，请重试')
    }
  }

  // 添加新项目
  const addProject = () => {
    setProjects([...projects, { name: '', description: '', link: '', icon: '' }])
  }

  // 删除项目
  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index))
  }

  // 添加新技能
  const addSkill = () => {
    setTechIcons([...techIcons, ''])
  }

  // 删除技能
  const removeSkill = (index: number) => {
    setTechIcons(techIcons.filter((_, i) => i !== index))
  }

  if (isLoading) return <LoadingState message="加载配置中..." />
  if (error) return <ErrorMessage message={error} />

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            网站管理
          </h1>
          <p className="text-base text-muted-foreground">
            在这里可以方便地修改您的网站内容
          </p>
        </div>

        {/* 配置标签页 */}
        <div className="flex space-x-2 border-b">
          <button
            className={`px-4 py-2 ${activeTab === 'basic' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('basic')}
          >
            基本信息
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'social' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('social')}
          >
            社交媒体
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'projects' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            项目展示
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'skills' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            技能标签
          </button>
        </div>

        {/* 基本信息配置 */}
        {activeTab === 'basic' && (
          <div className="grid gap-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">基本信息</h2>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded border dark:bg-gray-800"
                    value={basicInfo.name}
                    onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })}
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    标题
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded border dark:bg-gray-800"
                    value={basicInfo.headline}
                    onChange={(e) => setBasicInfo({ ...basicInfo, headline: e.target.value })}
                    placeholder="一句话介绍自己，例如：热爱编程的初中生"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    个人介绍
                  </label>
                  <textarea
                    className="w-full p-2 rounded border dark:bg-gray-800"
                    value={basicInfo.introduction}
                    onChange={(e) => setBasicInfo({ ...basicInfo, introduction: e.target.value })}
                    placeholder="详细介绍一下自己，例如：我是一名对编程充满热情的初中生..."
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    邮箱
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 rounded border dark:bg-gray-800"
                    value={basicInfo.email}
                    onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    GitHub 用户名
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded border dark:bg-gray-800"
                    value={basicInfo.github}
                    onChange={(e) => setBasicInfo({ ...basicInfo, github: e.target.value })}
                    placeholder="您的GitHub用户名（如果有的话）"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 社交媒体配置 */}
        {activeTab === 'social' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">社交媒体链接</h2>
              <button
                onClick={() => setSocialLinks([...socialLinks, { name: '', icon: '', href: '' }])}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                添加链接
              </button>
            </div>
            {socialLinks.map((link, index) => (
              <div key={index} className="p-4 border rounded space-y-3">
                <div className="flex justify-between">
                  <h3 className="font-medium">链接 {index + 1}</h3>
                  <button
                    onClick={() => setSocialLinks(socialLinks.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-600"
                  >
                    删除
                  </button>
                </div>
                <input
                  type="text"
                  className="w-full p-2 rounded border dark:bg-gray-800"
                  value={link.name}
                  onChange={(e) => {
                    const newLinks = [...socialLinks]
                    newLinks[index].name = e.target.value
                    setSocialLinks(newLinks)
                  }}
                  placeholder="名称（例如：X、GitHub）"
                />
                <input
                  type="text"
                  className="w-full p-2 rounded border dark:bg-gray-800"
                  value={link.icon}
                  onChange={(e) => {
                    const newLinks = [...socialLinks]
                    newLinks[index].icon = e.target.value
                    setSocialLinks(newLinks)
                  }}
                  placeholder="图标名称（例如：github、twitter）"
                />
                <input
                  type="text"
                  className="w-full p-2 rounded border dark:bg-gray-800"
                  value={link.href}
                  onChange={(e) => {
                    const newLinks = [...socialLinks]
                    newLinks[index].href = e.target.value
                    setSocialLinks(newLinks)
                  }}
                  placeholder="链接地址（例如：https://github.com/username）"
                />
              </div>
            ))}
          </div>
        )}

        {/* 项目配置 */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">项目展示</h2>
              <button
                onClick={addProject}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                添加项目
              </button>
            </div>
            {projects.map((project, index) => (
              <div key={index} className="p-4 border rounded space-y-3">
                <div className="flex justify-between">
                  <h3 className="font-medium">项目 {index + 1}</h3>
                  <button
                    onClick={() => removeProject(index)}
                    className="text-red-500 hover:text-red-600"
                  >
                    删除
                  </button>
                </div>
                <input
                  type="text"
                  className="w-full p-2 rounded border dark:bg-gray-800"
                  value={project.name}
                  onChange={(e) => {
                    const newProjects = [...projects]
                    newProjects[index].name = e.target.value
                    setProjects(newProjects)
                  }}
                  placeholder="项目名称"
                />
                <textarea
                  className="w-full p-2 rounded border dark:bg-gray-800"
                  value={project.description}
                  onChange={(e) => {
                    const newProjects = [...projects]
                    newProjects[index].description = e.target.value
                    setProjects(newProjects)
                  }}
                  placeholder="项目描述"
                  rows={2}
                />
                <input
                  type="text"
                  className="w-full p-2 rounded border dark:bg-gray-800"
                  value={project.link}
                  onChange={(e) => {
                    const newProjects = [...projects]
                    newProjects[index].link = e.target.value
                    setProjects(newProjects)
                  }}
                  placeholder="项目链接（如果有的话）"
                />
                <input
                  type="text"
                  className="w-full p-2 rounded border dark:bg-gray-800"
                  value={project.icon}
                  onChange={(e) => {
                    const newProjects = [...projects]
                    newProjects[index].icon = e.target.value
                    setProjects(newProjects)
                  }}
                  placeholder="项目图标（可以使用emoji，例如：🌟）"
                />
              </div>
            ))}
          </div>
        )}

        {/* 技能标签配置 */}
        {activeTab === 'skills' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">技能标签</h2>
              <button
                onClick={() => setTechIcons([...techIcons, ''])}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                添加技能
              </button>
            </div>
            <div className="space-y-2">
              {techIcons.map((icon, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 p-2 rounded border dark:bg-gray-800"
                    value={icon}
                    onChange={(e) => {
                      const newIcons = [...techIcons]
                      newIcons[index] = e.target.value
                      setTechIcons(newIcons)
                    }}
                    placeholder="输入一个技能图标名称，例如：html5"
                  />
                  <button
                    onClick={() => setTechIcons(techIcons.filter((_, i) => i !== index))}
                    className="px-3 py-1 text-red-500 hover:text-red-600"
                  >
                    删除
                  </button>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              提示：可用的图标名称可以在 
              <a 
                href="https://simpleicons.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Simple Icons
              </a> 
              网站上查找
            </div>
          </div>
        )}

        {/* 保存按钮 */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={saveConfig}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            保存配置
          </button>
        </div>

        {/* 使用帮助 */}
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded">
          <h3 className="text-lg font-semibold mb-2">使用帮助</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>所有修改都会自动保存在浏览器中</li>
            <li>修改完成后，点击"保存配置"按钮</li>
            <li>刷新主页即可看到修改后的效果</li>
            <li>如果需要恢复默认设置，只需清除浏览器数据即可</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
