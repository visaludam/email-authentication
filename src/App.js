import {useState, useEffect} from 'react'
import './App.css';
import Signin from './components/Signin';
import {auth} from './firebase'
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {

      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }

      if(userAuth){
        console.log(userAuth)
        setUser(user)
      }else{
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className="App">
      {user ? <Home/> : <Signin/>}
    </div>
  );
}

export default App;
