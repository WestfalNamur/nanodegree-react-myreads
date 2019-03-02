import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom'
import BookCard from './BookCard'
// import searchTerms from '../utils/SearchTerms'


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
      <div>
        <Link 
          className='close-addbook'
          to='/'
        > close </Link>
        <input 
          types='text' 
          placeholder='Booktitel' 
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        {this.state.books.length > 0 && (
          <BookCard
            books={this.state.books}
            bookToShelf={this.props.bookToShelf}
          />)}
      </div>
    )
  }
}

export default AddBook