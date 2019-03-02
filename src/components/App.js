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
        console.log(res)
      })
  }

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

  addBookToShelf = (event, book) => {
    const { shelf } = event.target
    console.log(`${shelf}`)
    BooksAPI.update(book, `${shelf}`)
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Dashboard
            books={this.state.books}
            handleSelectShelf={this.handleSelectShelf}
          /> )} />
        <Route exact path='/addbook' render={() => (
          <AddBook addBookToShelf={this.addBookToShelf}/> 
          )} />
      </div>
    );
  }
}

export default App;
