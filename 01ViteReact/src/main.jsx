import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// function MyApp(){
//   return(
//     <>
//     <div>Hello Ruhul</div>
//     <p>You r Smarty</p>

//     </>
//   )
// }
// const user = "RUHUL"
// const reactElement = React.createElement(
//   'a',
//   {href:"https://google.com",target:"_blank"},
//   "click me to visit",
//   user
// )
// const anotherElement = (
//   <a href='https://google.com'>Visit me</a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
