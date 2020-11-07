import React from 'react'

const ComfortForm = ( {temp, item, handleTemp, handleItems, handleComfortForm, handleClearItems} ) => {
  return (
    <form>
      <label>Clothing item: </label>
      <input
        type='text'
        name='item'
        id='itemName'
        placeholder='Name of clothing item'
      />
      <label>Degrees Added: </label>
      <input
        type='number'
        name='degrees'
        id='degreeValue'
        placeholder='0'
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default ComfortForm;
