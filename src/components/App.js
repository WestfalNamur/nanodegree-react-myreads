import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import Dashboard from './Dashboard'
import AddBook from './AddBook'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class App extends Component {
  state = {
    books: [],
    home: true 
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then(res => {
        this.setState({ books: res })
      })
  }

  /*
  removeBook = (book) => {
    this.setState((currentState) => ({
      books: currentState.books.filter((b) => {
        return b.id !== book.id
      })
    }))
  }

  handleSelectShelf = (event, book) => {
    const { value } = event.target
    console.log(`${value}`)
    this.setState((currentState) => ({
      books: currentState.books.map((b) => 
        b.id === book.id
          ? Object.assign(b, { shelf: value })
          : b
      )
    }))
  }
  */

  bookToShelf = (event, book) => {
    BooksAPI.update(book, `${event.target.value}`)
    BooksAPI.getAll()
      .then(res => {
        this.setState({ books: res })
      })
  }

  render() {
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Route exact path='/' render={() => (
          <div>
            <Dashboard
              books={this.state.books}
              bookToShelf={this.bookToShelf}
            /> 
            <div className="open-search">              
              <Link to="/addbook">
                   <button>Add a book</button>
               </Link>
            </div>
          </div>
          )} />
        <Route exact path='/addbook' render={() => (
          <AddBook bookToShelf={this.bookToShelf}/> 
          )} />
      </div>
    );
  }
}

App.propTypes = {
  books: PropTypes.object,
  bookToShelf: PropTypes.func,
}

export default App

