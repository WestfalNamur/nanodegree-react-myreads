import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom'
import BookCard from './BookCard'
import PropTypes from 'prop-types'

class AddBook extends Component {
  state = {
    query:'',
    books: []
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
    this.setState({ books: [] })
  } 

  render() {
    const searchingBooks = this.state.query === ''
      ? []
      : BooksAPI.search(this.state.query)
          .then(res => {
            this.setState({ books: res })
          })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'> 
            <button className="close-search"> </button>
          </Link>
          <div className='search-books-input-wrapper'>
            <input 
              types='text' 
              placeholder="Search by title or author" 
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
            {this.state.books.length > 0 && (
              <div className="search-books-results">
                <BookCard
                  books={this.state.books}
                  bookToShelf={this.props.bookToShelf}
                />
              </div>)}
          </div>
        </div>
      </div>
    )
  }
}

AddBook.propTypes = {
  query: PropTypes.string,
  books: PropTypes.object,
  bookToShelf: PropTypes.func,  
}

export default AddBook