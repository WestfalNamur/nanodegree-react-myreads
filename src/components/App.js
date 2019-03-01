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

  render() {
    return (
      <div className="App">
        <Dashboard books={this.state.books}/>
      </div>
    );
  }
}

export default App;
