import React from 'react'
import { useHistory } from 'react-router-dom'
import './List.css';
import PropTypes from 'prop-types';

const List = ({ clothing }) => {
  let history = useHistory();

  const redirect = () => {
    history.push('/')
  }

  return (
    <div>
      <section>
      {clothing.map(listItem => (
        <li className="list-item" key={listItem.id}>
          {listItem.item} + {listItem.degrees}°
        </li>
      ))}
      </section>
      <button className="back-home" onClick={redirect}>Back to Weather!</button>
    </div>
  )
}


export default List;

List.propTypes = {
  clothing: PropTypes.array,
}
