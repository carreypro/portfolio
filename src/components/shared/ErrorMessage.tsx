/**
 * 错误提示组件
 * 用于显示友好的错误信息
 */
export function ErrorMessage({ message }: { message: string }) {
  // 错误信息映射表
  const errorMessages: { [key: string]: string } = {
    // 通用错误
    'An error occurred': '发生了一个错误',
    'Please try again': '请重试',
    'Network error': '网络连接错误',
    'Page not found': '找不到页面',
    
    // 表单错误
    'This field is required': '此项为必填项',
    'Invalid email': '请输入有效的邮箱地址',
    'Invalid URL': '请输入有效的网址',
    
    // 文件操作错误
    'File too large': '文件太大',
    'Invalid file type': '不支持的文件类型',
    
    // 权限错误
    'Access denied': '访问被拒绝',
    'Unauthorized': '未经授权',
    
    // 配置错误
    'Configuration error': '配置错误',
    'Invalid configuration': '无效的配置',
    
    // 默认错误
    'default': '出现了一个错误，请稍后再试'
  }

  // 获取对应的中文错误信息，如果没有则使用默认信息
  const translatedMessage = errorMessages[message] || errorMessages['default']

  return (
    <div className="rounded-md bg-red-50 p-4 my-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-red-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">错误提示</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{translatedMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
