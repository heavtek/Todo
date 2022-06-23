import React,{Component} from 'react';
import Home from './components/Home';
import About from './components/About'
import {BrowserRouter as Router ,Route,Routes,Switch,Link} from 'react-router-dom'
import Form from './components/Form'
class App extends Component{
  constructor(){
    super();
    this.state={
      showGreen:false
    }
    this.Toggler=this.Toggler.bind(this);
  }

  Toggler(){
    this.setState({
      showGreen:!this.state.showGreen
    })
  }

  render(){
    var green={
      color:'green'
    }
    var blue={
      color:"blue"
    }
    return (
      <div>
       
         <Router>
        
          <Routes>
           <Route path='/' exact element={<Home/>}></Route>
           <Route path="/home" exact  element={<Home/>}></Route>
           <Route path="/Todo" element={<About/>}></Route>
           <Route path='/form' element={<Form/>}></Route>
          </Routes>
         
       </Router>
       
      </div>
    )
  }
}

export default  App;