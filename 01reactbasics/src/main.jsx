import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
    <h1>Custom App</h1>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit site</a>
)

const anotherUser = 'Extended link'

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'click here to visit google',

  anotherUser
)
createRoot(document.getElementById('root')).render(
 
   reactElement
  
)
