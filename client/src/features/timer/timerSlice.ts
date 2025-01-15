import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"
import type { Member } from "../../data/peoples"
import { members } from "../../data/peoples"

interface TimerState {
  availableMembers: Member[]
  queuedMembers: Member[]
  activeMembers: Member[]
  currentActiveMember?: string
}

const initialState: TimerState = {
  availableMembers: members,
  queuedMembers: [],
  activeMembers: [],
  currentActiveMember: undefined,
}

const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    queueMember: (state, action: PayloadAction<Member>) => {
      const memberIndex = state.availableMembers.findIndex(
        m => m.name === action.payload.name
      )
      if (memberIndex !== -1) {
        state.availableMembers.splice(memberIndex, 1)
        state.queuedMembers.push(action.payload)
      }
    },
    shuffleQueue: (state) => {
      state.queuedMembers = shuffleArray([...state.queuedMembers])
    },
    activateMember: (state, action: PayloadAction<Member>) => {
      const memberIndex = state.queuedMembers.findIndex(
        m => m.name === action.payload.name
      )
      if (memberIndex !== -1) {
        state.queuedMembers.splice(memberIndex, 1)
        state.activeMembers.unshift(action.payload)
        state.currentActiveMember = action.payload.name
      }
    },
  },
})

export const { queueMember, activateMember, shuffleQueue } = timerSlice.actions

export const selectAvailableMembers = (state: RootState) => state.timer.availableMembers
export const selectQueuedMembers = (state: RootState) => state.timer.queuedMembers
export const selectActiveMembers = (state: RootState) => state.timer.activeMembers
export const selectCurrentActiveMember = (state: RootState) => state.timer.currentActiveMember

export default timerSlice.reducer 