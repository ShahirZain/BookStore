import React, { Component } from 'react';

class bookShelf extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Books : [],
            cuurent_Reading :[],
            wantToRead : [],
            read : []
         }
    }

    componentDidMount(){
        this.setState({
            wantToRead : this.state.wantToRead
        })
    }

    render() { 
        return ( 
        <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>Book</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Current Reading</h2>
                <div className="bookshelf-books">
                  {/* <ol className="books-grid">
                    {
                      this.state.loading ?
                        <i style={{ color: '#2e7c31' }} className="fas fa-spinner fa-3x fa-spin"></i>
                        : (
                          this.state.currentlyReading.length ? this.state.currentlyReading.map(book => <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'https://static.myfigurecollection.net/pics/figure/large/643717.jpg'})` }}></div>
                                <div className="book-shelf-changer">
                                  <select onChange={this.changeShelf.bind(this, book)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option selected value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.author}</div>
                            </div>
                          </li>) : <p>No Books!</p>)
                    }
                  </ol> */}
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  {/* <ol className="books-grid">
                    {
                      this.state.loading ?
                        <i style={{ color: '#2e7c31' }} className="fas fa-spinner fa-3x fa-spin"></i>
                        : (
                          this.state.wantToRead.length ? this.state.wantToRead.map(book => <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'https://static.myfigurecollection.net/pics/figure/large/643717.jpg'})` }}></div>
                                <div className="book-shelf-changer">
                                  <select onChange={this.changeShelf.bind(this, book)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option selected value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.author}</div>
                            </div>
                          </li>) : <p>No Books!</p>)
                    }
                  </ol> */}
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  {/* <ol className="books-grid">
                    {
                      this.state.loading ?
                        <i style={{ color: '#2e7c31' }} className="fas fa-spinner fa-3x fa-spin"></i>
                        : (
                          this.state.read.length ? this.state.read.map(book => <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'https://static.myfigurecollection.net/pics/figure/large/643717.jpg'})` }}></div>
                                <div className="book-shelf-changer">
                                  <select onChange={this.changeShelf.bind(this, book)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option selected value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.author}</div>
                            </div>
                          </li>) : <p>No Books!</p>)
                    }
                  </ol> */}
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => this.props.history.push('/search')}>AdAd a book</button>
          </div>
        </div>

      </div> );
    }
}
 
export default bookShelf;