"use client"

import useQuery from "@/hooks/useQuery"

import { createContext, useCallback, useState, useEffect, Dispatch } from "react"


interface IMediaContextProps {
  isMedia_lg: boolean
}

export const MediaContext = createContext<IMediaContextProps>({
  isMedia_lg: false,
})



// const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    export default function MediaProvider({children,}:{children: React.ReactNode}) {

  const isMedia_lg = useQuery("(min-width: 1024px)")

  // Bundle windowDimensions and isMedia_lg into a single object
  const contextValues: IMediaContextProps = {
    isMedia_lg: isMedia_lg,
  }

  return (
    <MediaContext.Provider value={contextValues}>
      {children}
    </MediaContext.Provider>
  )
}
