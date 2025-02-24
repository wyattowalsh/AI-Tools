'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        'h-12 w-12 hover:bg-emerald-100 hover:text-emerald-900 dark:hover:bg-emerald-900 dark:hover:text-emerald-100',
        'transition-all duration-200 ease-in-out transform hover:scale-105',
        'shadow-sm hover:shadow-md',
        isCopied && 'text-emerald-600 dark:text-emerald-400'
      )}
      onClick={copy}
    >
      {isCopied ? (
        <Check className="h-6 w-6" />
      ) : (
        <Copy className="h-6 w-6" />
      )}
    </Button>
  )
} 