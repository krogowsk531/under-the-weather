import React, { useState, useEffect } from 'react'
import ComfortForm from '../ComfortForm/ComfortForm.js'
import List from '../List/List.js'

const ALL_CLOTHING = [
  { id: 1, item: 'Scarf', degrees: 20 },
  { id: 2, item: 'Sweater', degrees: 30 },
  { id: 3, item: 'Jacket', degrees: 40 }
]

// const CLOTHING_ITEMS = localStorage.getItem('clothing')
//   ? JSON.parse(localStorage.getItem('clothing'))
//   : []

const Comfort = () => {
  const [clothing, setClothing] = useState(ALL_CLOTHING)
  const [temp, setTemp] = useState('')
  const [item, setItem] = useState('')

  const handleTemp = event => {
    console.log('temp', event.target.value)
    setTemp(event.target.value)
  }

  const handleItems = event => {
    console.log('item', event.target.value)
    setItem(event.target.value)
  }

  const handleComfortForm = event => {
    event.preventDefault()
    if (temp !== '' && item !== '') {
      const clothes = { temp, item}
      setClothing([...clothing, clothes])
      setTemp('')
      setItem('')
    } else {
      console.log('Invalid temp or item')
    }
  }

  useEffect(() => {
    localStorage.setItem('clothing', JSON.stringify(clothing))
  }, [clothing])

  const handleClearItems = () => {
    setClothing([])
  }

  return (
    <section>
    <h3>Keep me Comfortable</h3>
    <div>
      <p>Total Temp:{' '}
      {clothing.reduce((acc, curr) => {
        return (acc += parseInt(curr.degrees))
      }, 0)}
      </p>
    </div>
    <ComfortForm />
    <List clothing={clothing}/>
    </section>
  )
}

export default Comfort;
