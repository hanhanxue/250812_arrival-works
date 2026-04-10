"use client"

import { useState } from "react"
import MuxPlayer from "@mux/mux-player-react"

type Props = {
  playbackId: string
}

export default function MuxVideo({ playbackId }: Props) {
  const [playing, setPlaying] = useState(false)

  return (
    <div data-nosnippet>
    <MuxPlayer
      aria-hidden="true"
      data-nosnippet
      // poster={`https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`}
      poster=""
      minResolution="1080p"
      // maxResolution="2160p"
      playbackId={playbackId}
      autoPlay
      muted
      loop
      // onPlaying={() => setPlaying(true)}
      onCanPlay={() => setPlaying(true)}
      style={{ opacity: playing ? 1 : 0, transition: "opacity 0.3s" }}
    />
    </div>
  )
}
