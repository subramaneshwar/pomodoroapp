import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { GrPowerReset } from 'react-icons/gr';


function Timer({ percentage, timeLeft, timerMode, setsecond,setisActive, isActive, setButtonText, buttonText }) {
  const handle = () => {
    setisActive(!isActive)
    setButtonText(buttonText === 'START'
      || buttonText === 'RESUME'
      ? 'PAUSE'
      : 'RESUME'
    )
  }
  
  let timesUpMsg = timerMode === 'promo'
    ? 'time for a break'
    : 'back to work!'

  let timeText = timeLeft === '0:00'
    ? timesUpMsg
    : timeLeft

  let textSize = timeLeft === '0:00'
    ? '10px'
    : '32px'
  return (
    <div onClick={handle} className='timer  flex justify-center items-center flex-shrink-0  w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full shadow-inner bg-[#003049] cursor-pointer '>
      <div className='display p-3 rounded-full h-[90%] w-[90%]'>
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={5}
          text={timeText}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: '#f77f00',
            textSize: textSize

          })}
        >

            <button className='text-3xl mt-40  text-white tracking-[.25em]'>{buttonText}</button>
          
        </CircularProgressbarWithChildren>
      </div>
    
    </div>
  )
}

export default Timer