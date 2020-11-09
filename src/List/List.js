import React from 'react'
import { useHistory } from 'react-router-dom'

const List = ({ clothing }) => {
  let history = useHistory();

  const redirect = () => {
    history.push('/')
  }

  return (
    <div>
      <section>
      {clothing.map(listItem => (
        <li key={listItem.id}>
        {listItem.item} - {listItem.degrees}°
        </li>
      ))}
      </section>
      <button onClick={redirect}>Back to Weather!</button>
    </div>
  )
}


export default List;
