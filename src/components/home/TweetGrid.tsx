/**
 * 推文网格组件
 * Tweet Grid Component
 * 
 * 展示精选的推文内容，包含：
 * - 响应式网格布局
 * - 动画效果
 * - 暗色模式支持
 */
"use client";

import { TweetProps, useTweet } from "react-tweet";
import { tweetIds } from "@/config/infoConfig";

import {
  MagicTweet,
  TweetNotFound,
  TweetSkeleton,
} from "@/components/home/TweetCard";

/**
 * 推文卡片组件
 * Tweet Card Component
 * 
 * @param id - 推文ID
 * @param apiUrl - 推文 API 地址
 * @param fallback - 加载失败时的回退组件
 * @param components - 自定义组件
 * @param fetchOptions - 数据获取选项
 * @param onError - 错误处理函数
 * @param props - 额外的 props
 */
export const ClientTweetCard = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}: TweetProps & { className?: string }) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);

  if (isLoading) return fallback;
  if (error || !data) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={onError ? onError(error) : error} />;
  }

  return <MagicTweet tweet={data} components={components} {...props} />;
};

/**
 * 推文网格主组件
 * Main Tweet Grid Component
 * 
 * 特点：
 * - 使用 CSS Grid 实现响应式布局
 * - 添加渐入动画效果
 * - 支持暗色模式主题
 */
export const TweetGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {tweetIds.map((id) => (
        <ClientTweetCard key={id} id={id} className="shadow-xl mb-4 break-inside-avoid"/>
      ))}
    </div>
  );
};
