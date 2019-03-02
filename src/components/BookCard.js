import React, { Component } from 'react'
import '../utils/App.css'

class BookCard extends Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map((book) => (
            <li key={book.id}>
              <div className='book'>
                <div className="book-top">
                  <div 
                    className="book-cover" 
                    style={{ width: 128, height: 193, backgroundImage:
                      `url(${book.imageLinks.smallThumbnail})`}}>
                  </div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option 
                        value="none"
                        onClick={() => this.props.removeBook((book))}>Trash
                      </option>
                      <option value="none">None</option>
                    </select>
                      <button onClick={() => this.props.moveToRead((book))}>
                      moveToRead</button>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default BookCard

// onChange={() => this.props.removeBook((book))}>Trash</option>