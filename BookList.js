import React, { Component } from "react";
import { FlatList, Text } from "react-native";
//import BookCard from './BookCard';

class BookList extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    const books = require("./db.json").Books;
    this.setState({ books });
  }
  render() {
    return (
      <FlatList
        data={this.state.books}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default BookList;
