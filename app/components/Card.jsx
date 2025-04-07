"use client"

import { useState, useEffect, useRef } from "react"
import { Download } from "lucide-react"

export default function Card({ title, files }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (isHovered) {
      setIsVisible(true)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    } else {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isHovered])

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a")
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="relative w-full h-full">
      <div
        className={`relative z-10 cursor-pointer transition-transform duration-300 ease-in-out ${
          isHovered ? "transform -translate-y-3" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2
          className="text-lg font-bold py-3 px-3 bg-black border-b-4 border-[#FC05CF] rounded-t-lg text-center h-24 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          {title}
        </h2>
      </div>

      <div
        className={`
          absolute top-0 left-0 right-0 
          transition-all duration-500 ease-in-out
          rounded-b-lg shadow-xl
          ${isVisible ? "opacity-100 translate-y-[calc(100%-4px)]" : "opacity-0 translate-y-0 pointer-events-none"}
        `}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      >
        <div className="p-4">
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#FC05CF] transition-colors cursor-pointer"
                onClick={() => handleDownload(file.fileUrl, file.fileName)}
              >
                <Download size={16} />
                <span>
  {file.fileName.length > 30
    ? file.fileName.slice(0, 30) + "..."
    : file.fileName}
</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

