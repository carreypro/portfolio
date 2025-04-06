'use client'

import React, { useEffect, useState } from 'react'
import { Container } from '@/components/layout/Container'
import { LoadingState } from '@/components/shared/LoadingState'
import { ErrorMessage } from '@/components/shared/ErrorMessage'

// 基本信息表单
const BasicInfoForm = () => {
  const [name, setName] = useState('')
  const [headline, setHeadline] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [email, setEmail] = useState('')
  const [githubUsername, setGithubUsername] = useState('')

  useEffect(() => {
    // 从 localStorage 加载数据
    const savedData = localStorage.getItem('basicInfo')
    if (savedData) {
      const data = JSON.parse(savedData)
      setName(data.name || '')
      setHeadline(data.headline || '')
      setIntroduction(data.introduction || '')
      setEmail(data.email || '')
      setGithubUsername(data.githubUsername || '')
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const data = { name, headline, introduction, email, githubUsername }
    localStorage.setItem('basicInfo', JSON.stringify(data))
    alert('基本信息已保存！')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">姓名</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">标题</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">简介</label>
        <textarea
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">邮箱</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">GitHub 用户名</label>
        <input
          type="text"
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        保存基本信息
      </button>
    </form>
  )
}

// 社交媒体链接表单
const SocialLinksForm = () => {
  const [links, setLinks] = useState<Array<{ name: string; icon: string; url: string }>>([])

  useEffect(() => {
    // 从 localStorage 加载数据
    const savedLinks = localStorage.getItem('socialLinks')
    if (savedLinks) {
      setLinks(JSON.parse(savedLinks))
    }
  }, [])

  const addLink = () => {
    setLinks([...links, { name: '', icon: '', url: '' }])
  }

  const removeLink = (index: number) => {
    const newLinks = [...links]
    newLinks.splice(index, 1)
    setLinks(newLinks)
  }

  const updateLink = (index: number, field: string, value: string) => {
    const newLinks = [...links]
    newLinks[index] = { ...newLinks[index], [field]: value }
    setLinks(newLinks)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('socialLinks', JSON.stringify(links))
    alert('社交媒体链接已保存！')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {links.map((link, index) => (
        <div key={index} className="flex space-x-2">
          <input
            type="text"
            value={link.name}
            onChange={(e) => updateLink(index, 'name', e.target.value)}
            placeholder="名称"
            className="block w-1/4 rounded-md border border-gray-300 px-3 py-2"
          />
          <input
            type="text"
            value={link.icon}
            onChange={(e) => updateLink(index, 'icon', e.target.value)}
            placeholder="图标"
            className="block w-1/4 rounded-md border border-gray-300 px-3 py-2"
          />
          <input
            type="url"
            value={link.url}
            onChange={(e) => updateLink(index, 'url', e.target.value)}
            placeholder="URL"
            className="block w-2/4 rounded-md border border-gray-300 px-3 py-2"
          />
          <button
            type="button"
            onClick={() => removeLink(index)}
            className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            删除
          </button>
        </div>
      ))}
      <div>
        <button
          type="button"
          onClick={addLink}
          className="mr-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          添加链接
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          保存链接
        </button>
      </div>
    </form>
  )
}

export default function AdminPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold">基本信息设置</h2>
          <BasicInfoForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold">社交媒体链接</h2>
          <SocialLinksForm />
        </div>
      </div>
    </Container>
  )
}
