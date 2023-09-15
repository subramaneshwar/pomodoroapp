import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { createContext } from "react";
import { auth } from "../FirebaseConfig";


export const MyContext = createContext();
const AppContext = ({children}) =>{

  const RegisterApi = async (email, pass, name, profile) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, pass)
      return data
    } catch (error) {
      return error
    }
  
  }

  const LoginAPi = async (email, pass) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, pass)
      return data
  
    } catch (error) {
      return error
    }
  };

 
  
  const  google = async (auth, provider) => {
    const res = await signInWithPopup(auth, provider)
    return res
  }
 

  const initialState = {
    signInWithGoogle: google,
    loginWithEmailAndPassword: LoginAPi,
    registerWithEmailAndPassword: RegisterApi,
  };
  
  return(
    <div>
      <MyContext.Provider value={initialState}>
        {children}
      </MyContext.Provider>
    </div>
  )
}
export default AppContext













