import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import Dashboard from './Dashboard'

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
    //console.log(`${event.target.value}`, book)
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

  render() {
    return (
      <div className="App">
        <Dashboard
          books={this.state.books}
          removeBook={this.removeBook}
          moveToRead={this.moveToRead}
          movetToCurrentlyReading={this.movetToCurrentlyReading}
          moveToWantToRead={this.moveToWantToRead}
          handleSelectShelf={this.handleSelectShelf}
          />
      </div>
    );
  }
}

export default App;
