import React, { Component } from 'react'
import '../utils/App.css'

class BookCard extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.books.map((book) => (
            <li key={book.id}>
              <div className='book'>
                <div 
                  className="book-cover" 
                  style={{ width: 128, height: 193, backgroundImage:
                    `url(${book.imageLinks.smallThumbnail})`}}>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BookCard