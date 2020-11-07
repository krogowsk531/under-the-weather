import React, { useState, useEffect } from 'react'

const IDEAL_TEMP = [
  { id: 1, myDegrees: 70 },
]

const PersonalTemp = () => {
  const [comfortTemp, setComfortTemp] = useState(IDEAL_TEMP)
  // const [myDegrees, setMyDegrees] = useState('')

  return (
    <h2>My Comfort Level: </h2>
  )
}

export default PersonalTemp
