// your code goes here
'use strict';

var React = require('react-native'),
    SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class HelloWorld extends React.Component {
  render() {
    return <React.Text style={styles.text}>Hello World (Again)</React.Text>;
  }
}


var PropertyFinderApp = React.createClass({
  render: function(){
    return (
      <React.NavigatorIOS 
        style={styles.container}
        initialRoute={{
          title: "Property Finder",
          component: SearchPage
        }} />
    )
  }
})


React.AppRegistry.registerComponent('PropertyFinderApp', function() { return PropertyFinderApp });