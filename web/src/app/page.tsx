import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const memories: Memory = (await response).data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="befor: befor: -ml-8 flex h-px w-5 items-center gap-2 text-sm text-gray-100 before:bg-gray-50">
              {memory.createdAt}
            </time>
          </div>
        )
      })}
    </div>
  )
}
