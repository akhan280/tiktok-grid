"use client"

import ImageGrid from "./imageComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
    <h1 className="text-3xl font-bold mt-4">Tiktok grid generator</h1>
    <ImageGrid />
  </div>

  )
}
