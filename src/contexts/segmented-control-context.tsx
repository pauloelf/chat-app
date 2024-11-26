import { createContext, useState } from "react"
import {
  SegmentedControlContextProviderType,
  SegmentType,
  SegmentedControlContextType
} from "../@types/segmented-control-type"

const defaultValues: SegmentedControlContextType = {
  segment: 'chats',
  setSegment: () => ''
}

export const SegmentedControlContext = createContext<SegmentedControlContextType>(defaultValues)

export function SegmentedControlContextProvider({children}: SegmentedControlContextProviderType) {
  const [segment, setSegment] = useState<SegmentType>('chats')
  
  return (
    <SegmentedControlContext.Provider value={{segment, setSegment}}>
      {children}
    </SegmentedControlContext.Provider>
  )
}