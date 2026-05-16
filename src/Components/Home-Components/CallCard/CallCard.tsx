import { useRef, useState } from 'react'
import CallCardChild from '../CallCardChild/CallCardChild'
import Button from '../../GoUp/Button'

const CallCard = () => {
  const scrollRef =  useRef<HTMLDivElement | null>(null);
  const [visible ,setVisible]= useState(false);
  function handleScroll(){
    if(scrollRef.current){
      if(scrollRef.current.scrollTop>200){
        setVisible(true);
      }else{
        setVisible(false);
      }

    }
  }
  return (
     <>
    <div ref={scrollRef} onScroll={handleScroll} className=' bg-[#292A2F] p-3 mt-3 rounded-2xl max-h-120 overflow-scroll no-scrollbar'>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <CallCardChild/>
        <Button scrollRef={scrollRef} visible={visible}/>      
              
    </div>
    
   </>
  )
}

export default CallCard