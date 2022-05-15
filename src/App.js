import React from 'react' 
import { useState, useEffect } from 'react'
import axios from 'axios'
import AdviceCard from './AdviceCard'

function App() {
  const [advice, setAdvice] = useState({})

  const getAdvice = async () => {
    try {
      const response = await axios.get(`https://api.adviceslip.com/advice`)
      const advice = response.data.slip
      setAdvice(advice)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(advice)

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className="App">
      <AdviceCard advice={advice} />
    </div>
  )
}

export default App