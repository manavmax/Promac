import { cn } from "../../lib/utils"
import { Avatar, AvatarImage } from "./Avatar"

export const TestimonialAuthor = {
  name: String,
  handle: String,
  avatar: String
}

export const TestimonialCard = ({ 
  author,
  text,
  href,
  className
}) => {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-2xl",
        "bg-white/10 backdrop-blur-md",
        "p-6 text-start",
        "hover:bg-white/15",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        "border border-white/20 hover:border-white/30",
        "shadow-lg hover:shadow-xl",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-white">
            {author.name}
          </h3>
          <p className="text-sm text-slate-300">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-slate-200">
        {text}
      </p>
    </Card>
  )
}
