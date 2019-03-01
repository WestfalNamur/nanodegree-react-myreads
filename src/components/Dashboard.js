import React, { Component } from 'react'
import BookCard from './BookCard'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <BookCard books={this.props.books}/>
      </div>
    )
  }
}

export default Dashboard