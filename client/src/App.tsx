import { useAppDispatch, useAppSelector } from "./app/hooks"
import { Person } from "./components/Person"
import { Timer } from "./components/Timer"
import {
  activateMember,
  queueMember,
  selectActiveMembers,
  selectAvailableMembers,
  selectQueuedMembers,
  shuffleQueue,
} from "./features/timer/timerSlice"

const App = () => {
  const dispatch = useAppDispatch()
  const availableMembers = useAppSelector(selectAvailableMembers)
  const queuedMembers = useAppSelector(selectQueuedMembers)
  const activeMembers = useAppSelector(selectActiveMembers)

  return (
    <div className="h-screen flex bg-slate-50">
      {/* Available Members */}
      <div className="w-32 p-4 bg-white shadow-md overflow-y-auto">
        <h2 className="text-lg font-bold mb-2 text-gray-800 text-center">6기 멤버</h2>
        <p className="text-xs text-gray-500 mb-6 text-center">
          아래에서 출석한 사람을 눌러주세요
        </p>
        <div className="flex flex-col gap-6">
          {availableMembers.map(member => (
            <Person
              key={member.name}
              {...member}
              isAvailable={true}
              onClick={() => dispatch(queueMember(member))}
            />
          ))}
        </div>
      </div>

      {/* Queued Members */}
      <div className="w-32 p-4 bg-white shadow-md overflow-y-auto border-x border-slate-100">
        <h2 className="text-lg font-bold mb-2 text-gray-800 text-center">출석한 사람</h2>
        <p className="text-xs text-gray-500 mb-4 text-center">
          다음 근황 발표할 사람을 눌러주세요
        </p>
        <button
          onClick={() => dispatch(shuffleQueue())}
          className="w-full mb-4 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 
            rounded-full hover:bg-gray-100 transition-colors"
        >
          순서 셔플하기
        </button>
        <div className="h-px bg-gray-100 mb-4" />
        <div className="flex flex-col gap-6">
          {queuedMembers.map((member, index) => (
            <Person
              key={member.name}
              {...member}
              isNext={index === 0}
              onClick={() => dispatch(activateMember(member))}
            />
          ))}
        </div>
      </div>

      {/* Active Members */}
      <div className="flex-1 p-4 bg-white shadow-md overflow-y-auto">
        <h2 className="text-lg font-bold mb-6 text-gray-800">
          근황을 공유해주세요 :)
        </h2>
        <div className="space-y-3">
          {activeMembers.map(member => (
            <Timer key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
