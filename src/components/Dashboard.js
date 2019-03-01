import React, { Component } from 'react'
import BookCard from './BookCard'

class Dashboard extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently reading</h2>
          <BookCard books={this.props.books.filter(book =>
            book.shelf === 'currentlyReading'
          )}/>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to read</h2>
          <BookCard books={this.props.books.filter(book =>
            book.shelf === 'wantToRead'
          )}/>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <BookCard books={this.props.books.filter(book =>
            book.shelf === 'read'
          )}/>
        </div>
      </div>
    )
  }
}

export default Dashboard