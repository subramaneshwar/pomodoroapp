import React from 'react'

function Change({timerMode,setTimerMode,setisActive,setsecond,PromLength,ShortLength,setButtonText}) {
  const  handleMode = (e)=>{
        setTimerMode(e.target.id)
        setisActive(false)
        setButtonText('START')
        switch(e.target.id) {
            case 'short':
              setsecond(ShortLength * 60)
              break
            default:
              setsecond(PromLength * 60)
          }
    }
  return (
    <div>
        <form action="" className='controls flex justify-around rounded-xl px-4 py-2 z-50 bg-[#219ebc] my-4'>

            <input type="radio" id="promo" name="mode" checked={timerMode === 'promo'} onChange={handleMode} className='fixed opacity-0 w-0' />
            <label  htmlFor="promo" className='flex items-center h-10 md:h-12 border-none rounded-lg px-2 md:px-4 text-center cursor-pointer bg-[#f77f00]  text-white font-bold ' >Focus Time</label>
            
            <input type="radio" id="short" name="mode" checked={timerMode === 'short'} onChange={handleMode}  className='fixed opacity-0 w-0' />
            <label  htmlFor="short" className='flex items-center h-10 md:h-12 border-none rounded-lg px-2 md:px-4 text-center cursor-pointer bg-[#f77f00] text-white font-bold '>short break</label>



        </form>
    </div>
  )
}

export default Change