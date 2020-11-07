import React, { useState, useEffect } from 'react'

const CLOTHING_ITEMS = localStorage.getItem('clothing')
  ? JSON.parse(localStorage.getItem('clothing'))
  : []

const Comfort = () => {
  const [clothing, setClothing] = useState(CLOTHING_ITEMS)
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
        return (acc += parseInt(curr.item))
      }, 0)}
      </p>
    </div>
    </section>
  )
}

export default Comfort;
