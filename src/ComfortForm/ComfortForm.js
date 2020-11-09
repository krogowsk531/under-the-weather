import React from 'react'
import './ComfortForm.css';
import PropTypes from 'prop-types';

const ComfortForm = ({ item, degrees, handleItem, handleTemp, handleComfortForm, handleClearItem }) => (
    <form className='degrees-form'>
      <label className="clothing-label">Clothing item: </label>
      <input
        type='text'
        name='item'
        id='itemName'
        placeholder='Name of clothing item'
        value={item}
        onChange={handleItem}
      />
      <label className='degrees-label'>Degrees Added: </label>
      <input
        type='number'
        name='degrees'
        id='degreeValue'
        placeholder='0'
        value={degrees}
        onChange={handleTemp}
      />
      <button className='button' type='submit' onClick={handleComfortForm}>Add</button>{' '}
      <button className='button' type='submit' onClick={handleClearItem}>Delete</button>
    </form>
  )


export default ComfortForm;

ComfortForm.propTypes = {
  degrees: PropTypes.string,
  handleClearItem: PropTypes.func.isRequired,
  handleComfortForm: PropTypes.func.isRequired,
  handleItem: PropTypes.func.isRequired,
  handleTemp: PropTypes.func.isRequired,
  item: PropTypes.string
}
