import React from 'react'

const ComfortForm = ({ item, degrees, handleItem, handleTemp, handleComfortForm, handleClearItem }) => (
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
      <button type='submit' onClick={handleComfortForm}>Add</button>{' '}
      <button type='submit' onClick={handleClearItem}>Delete</button>
    </form>
  )


export default ComfortForm;
