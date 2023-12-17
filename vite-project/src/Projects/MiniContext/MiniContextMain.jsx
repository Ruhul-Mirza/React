import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function MiniContextMain() {
  

  return (
    <UserContextProvider>
      <h1>Context API Mini Project</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default MiniContextMain;
