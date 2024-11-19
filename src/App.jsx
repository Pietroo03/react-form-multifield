import { useState } from 'react'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>

      <AppHeader />
      <AppMain />

    </>

  )
}

export default App
