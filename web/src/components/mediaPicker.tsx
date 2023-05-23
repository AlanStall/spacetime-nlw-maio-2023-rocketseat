'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }
  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-4 w-4"
      ></input>

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="rouended-lg aspect-video w-full object-cover"
        ></img>
      )}
    </>
  )
}
