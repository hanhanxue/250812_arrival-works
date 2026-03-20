"use client"

import { useState } from "react"
import MuxPlayer from "@mux/mux-player-react/lazy"

type Props = {
  playbackId: string
  aspectRatio?: number
}

export default function MuxVideo({ playbackId, aspectRatio = 2 }: Props) {
  const [playing, setPlaying] = useState(false)

  return (
    <div style={{ position: "relative", aspectRatio }}>
      <MuxPlayer
        aria-hidden="true"
        poster=""
        minResolution="1080p"
        maxResolution="2160p"
        playbackId={playbackId}
        autoPlay
        muted
        loop
        onPlaying={() => setPlaying(true)}
        style={{ opacity: playing ? 1 : 0, transition: "opacity 0.1s" }}
      />
    </div>
  )
}
