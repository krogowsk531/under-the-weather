import React from 'react'

const List = ({ clothing }) => (
  <div>
    <section>
    {clothing.map(listItem => (
      <li key={listItem.id}>
      {listItem.item} - {listItem.degrees}°
      </li>
    ))}
    </section>
  </div>
)


export default List;
