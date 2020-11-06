import React from 'react'

const ComfortForm = ( {temp, item, handleTemp, handleItems, handleComfortForm, handleClearItems} ) => {
  return (
    <form>
      <label>Name of clothing item</label>
      <input
        type='text'
        name='item'
        id='itemName'
        placeholder='Name of clothing item'
        value={item}
        onChange={handleItems}
      />
      <label>Degrees Added</label>
      <input
        type='number'
        name='temp'
        id='tempValue'
        placeholder='Amount of comfort degrees'
        value={temp}
        onChange={handleTemp}
      />
      <button type='submit'>Add</button>{' '}
      <button type='submit' onClick={handleClearItems}>Delete</button>
    </form>
  )
}

export default ComfortForm;
