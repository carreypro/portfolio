/**
 * 加载状态组件
 * 用于显示加载中的状态提示
 */
export function LoadingState({ message }: { message?: string }) {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 dark:border-white"></div>
      <span className="text-sm text-gray-700 dark:text-gray-300">
        {message || '加载中...'}
      </span>
    </div>
  )
}
