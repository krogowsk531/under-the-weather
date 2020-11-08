import React, { Component } from 'react'
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clothingItems: [
        { id: 1, item: 'Scarf', degrees: 20 },
        { id: 2, item: 'Hat', degrees: 20 },
        { id: 3, item: 'Sweater', degrees: 40 },
        { id: 4, item: 'Boots', degrees: 30 }
      ]
    }
  }

  renderData() {
    return this.state.clothingItems.map((clothing, index) => {
      const { id, item, degrees } = clothing
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{item}</td>
          <td>{degrees}</td>
        </tr>
      )
    })
  }

  renderHeader() {
    let header = Object.keys(this.state.clothingItems[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  render() {
    return (
      <div>
        <h1 id='title'>Clothing Table</h1>
        <table id='students'>
          <tbody>
            <tr>{this.renderHeader()}</tr>
              {this.renderData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
