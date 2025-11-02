"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { useIsClient } from "@/hooks/useIsClient"

type MusicContextType = {
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  togglePlay: () => void
  isClient: boolean
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const isClient = useIsClient()

  const togglePlay = () => {
    if (!isClient) return
    setIsPlaying(!isPlaying)
  }

  const safeSetIsPlaying = (playing: boolean) => {
    if (!isClient) return
    setIsPlaying(playing)
  }

  return (
    <MusicContext.Provider value={{ 
      isPlaying, 
      setIsPlaying: safeSetIsPlaying, 
      togglePlay,
      isClient
    }}>
      {children}
    </MusicContext.Provider>
  )
}

export function useMusicContext() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error("useMusicContext must be used within a MusicProvider")
  }
  return context
}
