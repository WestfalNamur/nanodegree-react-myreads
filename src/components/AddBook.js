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
      query: query
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
    this.setState({ books: [] })
  } 

  render() {
    if (this.state.query !== '') {
      BooksAPI.search(this.state.query)
        .then(resSearch => {
          if (resSearch.error !== undefined) {
            this.setState({ books: [] })
          } else {
            BooksAPI.getAll()
              .then(resAll => {
                if (resAll.length > 0) {
                  resAll.map((b) => {
                    resSearch.forEach((element, index) => {
                      if(element.id === b.id) {
                        resSearch[index] = b
                      }
                    })
                  })
                  this.setState({ books: resSearch })
                } else { this.setState({ books: [] }) }
              })
          }
        })
    }

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
  books: PropTypes.array,
  bookToShelf: PropTypes.func,  
}

export default AddBook