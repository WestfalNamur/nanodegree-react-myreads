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

  moveToRead = (book) => {
    console.log('moveToRead was invoced')
    this.setState((currentState) => ({
      books: currentState.books.map((b) => 
        b.id === book.id 
          ? Object.assign(b, { shelf: 'read' })
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
          />
      </div>
    );
  }
}

export default App;
