import { ReactNode } from "react"

export type SegmentType = 'chats' | 'profile'

export type SegmentedControlContextProviderType = {
  children: ReactNode
}

export type SegmentedControlContextType = {
  segment: SegmentType
  setSegment: React.Dispatch<React.SetStateAction<SegmentType>>
}