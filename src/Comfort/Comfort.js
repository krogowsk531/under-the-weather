import React, { useState, useEffect } from 'react'
import ComfortForm from '../ComfortForm/ComfortForm.js'
import List from '../List/List.js'


const ALL_CLOTHING = localStorage.getItem('clothing')
  ? JSON.parse(localStorage.getItem('clothing'))
  : []

const Comfort = () => {
  const [clothing, setClothing] = useState(ALL_CLOTHING)
  const [item, setItem] = useState('')
  const [degrees, setDegrees] = useState('')

  const handleItem = event => {
    console.log('item', event.target.value)
    setItem(event.target.value)
  }

  const handleDegrees = event => {
    console.log('degrees', event.target.value)
    setDegrees(event.target.value)
  }

  const handleComfortForm = event => {
    console.log('here')
    event.preventDefault()
    if (item !== '' && degrees > 0) {
      const clothes = { item, degrees }
      setClothing([...clothing, clothes])
      setItem('')
      setDegrees('')
    } else {
      console.log('Invalid item or degree amount')
    }
  }

  useEffect(() => {
  localStorage.setItem('clothing', JSON.stringify(clothing))
  }, [clothing])

  const handleClearItem = () => {
  setClothing([])
  }

  return (
    <section>
    <h4>Get me to my desired temp!</h4>
    <div>
      <p>Total Temp:{' '}
      {clothing.reduce((acc, curr) => {
        return (acc += parseInt(curr.degrees))
      }, 0)}
      </p>
    </div>
    <ComfortForm
      item={item}
      degrees={degrees}
      handleItem={handleItem}
      handleTemp={handleDegrees}
      handleComfortForm={handleComfortForm}
      handleClearItem={handleClearItem}
    />
    <List clothing={clothing}/>
    </section>
  )
}

export default Comfort;
