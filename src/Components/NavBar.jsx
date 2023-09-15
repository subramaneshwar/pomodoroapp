import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout, selectUser } from '../app/userSlice'
import { auth } from '../FirebaseConfig'
// import { logout, selectUser } from '../app/userSlice'
// import { auth } from '../firebaseConfig'

function NavBar() {
  const [Hover, setHover] = useState(false)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const signout = () => {
    dispatch(logout)
    auth.signOut()

  }
  return (

    <nav className='w-full fixed shadow-xl flex top-0 z-50 justify-between items-center h-16 px-8 mx-auto bg-[#219ebc]  '>
      <div className=' inline-flex'>
        <Link to='/'>
          <p className='font-rampart font-extrabold  text-2xl py-2'>Pomodro</p>
        </Link>
      </div>
      <div className='relative hidden sm:block flex-grow-0 flex-shrink'>


      </div>
      <div className='flex'>

        <div className=' font-serif'>
          <div className=' relative group cursor-pointer' onClick={() => { setHover(!Hover) }}>

            {user.photoURL ? <img class="w-10 h-10 rounded-full" src={user.photoURL} alt="Rounded avatar" />
              :

              <div className="relative inline-flex items-center justify-center   w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-black text-xl">{user?.email.toUpperCase()[0]}</span>                </div>
            }
            <div class={`absolute right-0 z-10 mt-2  w-48  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${Hover ? "block" : "hidden"} `} >
              <Link class="block px-4 py-2 text-sm text-gray-700" onClick={signout} >Sign out</Link>
            </div>
          </div>
        </div>


        {/* --- */}

      </div>

    </nav>

  )
}



export default NavBar