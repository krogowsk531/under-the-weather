import React, { Component } from 'react'
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clothingItems: [
        { item: 'Scarf', degrees: 20 },
        { item: 'Hat', degrees: 20 },
        { item: 'Sweater', degrees: 40 },
        { item: 'Boots', degrees: 30 },
        { item: 'Gloves', degrees: 15 },
        { item: 'Socks', degrees: 10 },
        { item: 'Tee', degrees: 15 },
        { item: 'Jacket', degrees: 50 },
        { item: 'Jeans', degrees: 25 },
        { item: 'Ski Pants', degrees: 55 }
      ]
    }
  }

  renderData() {
    return this.state.clothingItems.map((clothing, index) => {
      const { id, item, degrees } = clothing
      return (
        <tr key={id}>
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
