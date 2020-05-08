import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation';
import BookList from './BookList';
export default class App extends React.Component {
  getUserLocationHandler=()=>{
    navigator.geolocation.getCurrentPosition(position=>{
      debugger
      console.log(position)
    },err=> console.log(err))
  }
 /* render() {
    return (
      <View style={styles.container}>
       <FetchLocation  onGetLocation ={this.getUserLocationHandler}/>
      </View>
    );
  }*/
  render() {
    return (
     <BookList/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
