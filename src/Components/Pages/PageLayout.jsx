import { useEffect, useState } from "react";
import '../../App.css'
import NavBar from "../NavBar";
import Change from "../Change";
import Timer from "../Timer";
function PageLayout() {
    const [timerMode, setTimerMode] = useState('promo')
    const [PromLength, setPromLength] = useState(25)
    const [ShortLength, setShortLength] = useState(5)
    const [second, setsecond] = useState(PromLength * 60)
    const [isActive, setisActive] = useState(false)
    const [buttonText, setButtonText] = useState('START')
    const [isCompleted, setisCompleted] = useState(false)
    useEffect(() => {
        if (isActive) {
            const interval = setInterval(() => {
                setsecond(second => second - 1)
            }, 1000)
            console.log("hello");
            if ( second === 0) {
                clearInterval(interval)
                setisActive(false)
                setButtonText("")
            }
            return () => clearInterval(interval)
        }
    }, [isActive, second])
   
    const formatTime = (seconds) => {
        return (`${Math.floor(seconds / 60)}:${(seconds % 60 > 9)
                ? seconds % 60
                : '0' + seconds % 60
            }`)
    }
    const calcPercentage = () => {
        if (timerMode === 'promo') {
            return ((second / (PromLength * 60)) * 100)
        }
        if (timerMode === 'short') {
            return ((second / (ShortLength * 60)) * 100)
        }
    }
    const handlereset = ()=>{
        setisActive(false)
        if(timerMode === "promo"){
            setsecond(PromLength*60)
        }else{
            setsecond(ShortLength*60)

        }
        setButtonText('START')
      }
    return (
        <div className="bg-[#8d99ae] h-screen flex flex-col items-center justify-center">
        <div className="font-Rampart w-full">

                <NavBar />
            </div>
            <h1 className="font-Rampart text-3xl md:text-5xl text-[#d90429] font-extrabold "> Pomodro timer app</h1>
            <Change
                timerMode={timerMode}
                setTimerMode={setTimerMode}
                PromLength={PromLength}
                ShortLength={ShortLength}
                setisActive={setisActive}
                setButtonText={setButtonText}
                isActive={isActive}
                setsecond={setsecond}
            />
            <Timer
                percentage={calcPercentage()}
                timeLeft={formatTime(second)}
                setisActive={setisActive}
                isActive={isActive}
                setButtonText={setButtonText}
                buttonText={buttonText}
                timerMode={timerMode}
                setsecond={setsecond}
            />
              <button className='text-3xl text-[#4d72be] mt-4 flex gap-2 bg-[#ffc300] p-2 rounded-lg ' onClick={handlereset} >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rotate " width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4d72be" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
            </svg> Reset </button>
        </div>
    )
}

export default PageLayout