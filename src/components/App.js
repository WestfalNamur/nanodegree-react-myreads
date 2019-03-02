import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import Dashboard from './Dashboard'
import AddBook from './AddBook'
import  { Route } from 'react-router-dom'

class App extends Component {
  state = {
    books: []
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
      <div className="App">
        <Route exact path='/' render={() => (
          <Dashboard
            books={this.state.books}
            bookToShelf={this.bookToShelf}
          /> )} />
        <Route exact path='/addbook' render={() => (
          <AddBook bookToShelf={this.bookToShelf}/> 
          )} />
      </div>
    );
  }
}

export default App;
