import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toggle:false,
      SwithButton:'SwithButton',
      ButtonBackgroud:'ButtonBackgroud'
    };
  }

  toggleState(e){
    e.preventDefault();
    
    this.state.toggle == false ? this.setState({toggle:true, SwithButton:'SwithButtonRight',ButtonBackgroud:'ButtonBackgroudRight'}):this.setState({toggle:false,SwithButton:'SwithButton',ButtonBackgroud:'ButtonBackgroud'});
   
    console.log(this.state.toggle)
    console.log(this.state.SwithButton)

  }

  render(){
    return(
      <div className='Content'>
        <div className={this.state.ButtonBackgroud}>
            <div className={this.state.SwithButton} onClick={this.toggleState.bind(this)}></div>
        </div>
      </div>
    )
  }
}

export default App;
