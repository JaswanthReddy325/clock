import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state={showClock:false,}
  onToogleClock=()=>{
    this.setState(prevState=>{
      const{showClock}=prevState
      return{
        showClock:!showClock
      }
    })
  }
  render() {
    const {showClock}=this.state
    return (
      <div className="app-container">
        <button type="button" onClick={this.onToogleClock} className="toggle-button">
        {showClock?'Hide Clock':'Show Clock'}
          
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
