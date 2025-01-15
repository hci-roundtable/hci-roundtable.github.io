import { useEffect, useState } from "react"
import { FaPause, FaPlay } from "react-icons/fa"
import { VscDebugRestart } from "react-icons/vsc"
import { useAppSelector } from "../app/hooks"
import type { Member } from "../data/peoples"
import { selectCurrentActiveMember } from "../features/timer/timerSlice"

interface TimerProps {
  member: Member
}

export const Timer = ({ member }: TimerProps) => {
  const currentActiveMember = useAppSelector(selectCurrentActiveMember)
  const isActive = currentActiveMember === member.name
  
  const [isRunning, setIsRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  // 새로운 타이머가 시작되면 이전 타이머들은 멈춤
  useEffect(() => {
    if (isActive) {
      setIsRunning(true)
    } else {
      setIsRunning(false)
    }
  }, [isActive])

  useEffect(() => {
    let intervalId: number

    if (isRunning && isActive) {
      intervalId = setInterval(() => {
        setElapsed(prev => prev + 1)
      }, 1000)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isRunning, isActive])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const progressWidth = Math.min((elapsed / 90) * 100, 100)

  return (
    <div className="flex items-center gap-2 p-4 border-b">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <div className="w-full h-full">
          <img 
            src={member.picture}
            alt={member.name} 
            className="w-full h-full object-cover"
            style={{
              objectPosition: "50% 50%"
            }}
          />
        </div>
      </div>
      <span className="w-16 text-sm">{member.name}</span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="p-1.5 rounded hover:bg-gray-100"
          disabled={!isActive}
        >
          {isRunning ? <FaPause size={16} /> : <FaPlay size={16} />}
        </button>
        <button
          onClick={() => setElapsed(0)}
          className="p-1.5 rounded hover:bg-gray-100"
          disabled={!isActive}
        >
          <VscDebugRestart size={16} />
        </button>
      </div>
      <span className="w-16 font-mono text-sm">{formatTime(elapsed)}</span>
      <div className="flex-1">
        <div 
          className="h-2 bg-emerald-500 rounded-full transition-all duration-1000"
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    </div>
  )
} 