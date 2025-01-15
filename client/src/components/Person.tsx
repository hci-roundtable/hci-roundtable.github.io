interface PersonProps {
  name: string
  picture: string
  onClick?: () => void
  isNext?: boolean
  isAvailable?: boolean
  className?: string
}

export const Person = ({ 
  name, 
  picture, 
  onClick, 
  isNext, 
  isAvailable,
  className = "" 
}: PersonProps) => {
  return (
    <div 
      onClick={onClick}
      className={`flex flex-col items-center cursor-pointer hover:scale-105 transition-transform ${className} ${
        isNext ? "relative" : ""
      } ${isAvailable ? "opacity-50" : ""}`}
    >
      <div className="relative w-20 h-20">
        <div className="w-full h-full rounded-full overflow-hidden shadow-sm">
          <div className="w-full h-full">
            <img 
              src={picture}
              alt={name} 
              className="w-full h-full object-cover"
              style={{
                objectPosition: "50% 50%"
              }}
            />
          </div>
        </div>
        {isNext && (
          <span className="absolute -top-1 -right-1 text-emerald-500 text-xs font-semibold bg-emerald-50 
            px-2 py-0.5 rounded-full shadow-sm">
            Next
          </span>
        )}
      </div>
      <span className="text-sm font-medium text-gray-700 mt-2">{name}</span>
    </div>
  )
} 