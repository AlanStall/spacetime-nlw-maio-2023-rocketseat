import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="hover: flex items-center gap-1 text-sm text-gray-100 text-gray-200"
      >
        <ChevronLeft className="h-4 w-4 " />
        Voltar à timeline
      </Link>

      <form className="ga-2 flex flex-1 flex-col">
        <div className="ga-4 flex items-center">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-6 w-6" />
            Anexar mídia
          </label>

          <label
            htmlFor="isPublic"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className=""
            />
            Tornar memória pública
          </label>
        </div>
        <input type="file" id="media" className="invisible"></input>
      </form>
    </div>
  )
}
