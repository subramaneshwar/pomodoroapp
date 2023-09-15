import Login from "./Components/Login/Login";
import Loader from "./Components/Loader/Loader"
import Register from "./Components/Login/Register";
import PageLayout from "./Components/Pages/PageLayout";
import { Routes,Route } from 'react-router-dom'
import ProtectedRoutes from "./Components/ProtectedRoutes";
import AppContext from "./Components/UserApi";
import { useNavigate } from 'react-router-dom';
import { auth } from "./FirebaseConfig";
import { useEffect, useState } from "react";
import { useSelector,useDispatch} from 'react-redux'
import { login, logout, selectUser } from "./app/userSlice";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const [Loadng, setLoadng] = useState(true)
  const [AllUsers,setAllUsers] =useState([])
  const navigate = useNavigate()
  useEffect(() => {
    console.log("hi");
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // console.log(userAuth);
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }));
        setLoadng(false) 
        navigate('/')
        
      } else {
        dispatch(logout());
        setLoadng(false)

      }
    })
    
  }, [])
  if(Loadng){
    return(<Loader/>)
  }
  return (
    <div>
      <AppContext>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/" element={<ProtectedRoutes><PageLayout/></ProtectedRoutes>}/>
      </Routes>
      </AppContext>
    </div>
  );
}


export default App;
