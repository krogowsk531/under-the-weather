import React from 'react'

const ComfortForm = ({ item, degrees, handleItem, handleTemp, handleComfortForm }) => {
  return (
    <form>
      <label>Clothing item: </label>
      <input
        type='text'
        name='item'
        id='itemName'
        placeholder='Name of clothing item'
        value={item}
        onChange={handleItem}
      />
      <label>Degrees Added: </label>
      <input
        type='number'
        name='degrees'
        id='degreeValue'
        placeholder='0'
        value={degrees}
        onChange={handleTemp}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default ComfortForm;
