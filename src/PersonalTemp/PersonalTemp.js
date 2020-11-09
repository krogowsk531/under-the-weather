import React, { useState, useEffect } from 'react'
import PersonalTempForm from '../PersonalTempForm/PersonalTempForm.js'

const IDEAL_TEMP = localStorage.getItem('comfortTemp')
  ? JSON.parse(localStorage.getItem('comfortTemp'))
  : []

const PersonalTemp = () => {
  const [comfortTemp, setComfortTemp] = useState(IDEAL_TEMP)
  const [displayComfortLevel, setDisplayComfortLevel] = useState(IDEAL_TEMP)

  const handleMyDegrees = event => {
    console.log('myDegrees', event.target.value)
    setComfortTemp(event.target.value)
  }

  const handleSubmitDegrees = event => {
    event.preventDefault()
    setDisplayComfortLevel(comfortTemp)
    if (comfortTemp > 0) {
      localStorage.setItem('comfortTemp', comfortTemp)
    } else {
      console.log('Invalid degrees')
    }
  }

  return (
    <section>
    <h1>Keep me Comfortable</h1>
    <h2>My Comfort Level: {displayComfortLevel}°</h2>

    <PersonalTempForm
      comfortTemp={comfortTemp}
      handleMyDegrees={handleMyDegrees}
      handleSubmitDegrees={handleSubmitDegrees}
      />
    </section>
  )
}

export default PersonalTemp
