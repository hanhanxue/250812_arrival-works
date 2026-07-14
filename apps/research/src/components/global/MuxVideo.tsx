"use client"

import { useState } from "react"
import type { Ref } from "react"
import MuxPlayer from "@mux/mux-player-react"
import type MuxPlayerElement from "@mux/mux-player"

type Props = {
  playbackId: string
  ref?: Ref<MuxPlayerElement>
}

export default function MuxVideo({ playbackId, ref }: Props) {
  const [playing, setPlaying] = useState(false)

  return (
    <div data-nosnippet style={{ width: "100%", height: "100%" }}>
    <MuxPlayer
      ref={ref}
      aria-hidden="true"
      data-nosnippet
      // poster={`https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`}
      poster=""
      playbackId={playbackId}
      autoPlay
      muted
      loop
      // onPlaying={() => setPlaying(true)}
      onCanPlay={() => setPlaying(true)}
      style={{ 
        opacity: playing ? 1 : 0, 
        transition: "opacity 0.3s",
        "--media-background-color": "transparent", // WOW this is a good trick!!
      }}
    />
    </div>
  )
}
