
import type { RefObject } from "react"

interface ButtonProps {
    scrollRef : RefObject<HTMLDivElement | null> ;
    visible : boolean;
}

const Button = ({scrollRef,visible}:ButtonProps) => {
    const scrollToUp = ()=>{scrollRef?.current?.scrollTo({top:0,behavior:'smooth'})}
    if(!visible) return null;
  return (
    <button onClick={scrollToUp} className={"absolute bottom-27 right-5 z-2000 cursor-pointer  bg-white p-3 rounded-full"}> Up </button>
  )
}

export default Button