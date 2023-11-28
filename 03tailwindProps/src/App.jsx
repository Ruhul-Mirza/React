import './App.css'
import Card from './components/Card'
function App() {
  let myObj = {
    username:"Ruhul",
    age:22
  }
  return (
    <>
      <h1 className='bg-blue-600 p-4 text-white rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="Ruhul" btn="Click ME"/>
      <Card username="Mujju" />
    </>
  )
}

export default App
