import React, { Component } from 'react'
import BookCard from './BookCard'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently reading</h2>
          <BookCard 
            books={this.props.books.filter(book =>
            book.shelf === 'currentlyReading')}
            bookToShelf={this.props.bookToShelf}
            />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to read</h2>
          <BookCard 
            books={this.props.books.filter(book =>
            book.shelf === 'wantToRead')}
            bookToShelf={this.props.bookToShelf}
            />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <BookCard 
            books={this.props.books.filter(book =>
            book.shelf === 'read')}
            bookToShelf={this.props.bookToShelf}
            />
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  books: PropTypes.array,
  bookToShelf: PropTypes.func,
}

export default Dashboard