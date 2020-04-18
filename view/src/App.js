import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      videos: []
    }
    
  }
  componentDidMount(){
    fetch("http://localhost:3002/api/videos",{mode: 'cors'}).then((res)=>{
      res.json()
    }).then((result)=>{
      console.log(result)
      this.setState({
        videos: result
      })
    })
  }
  render(){
    console.log(this.state.videos)
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
